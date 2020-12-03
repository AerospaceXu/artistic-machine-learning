import { Ref, ref } from 'vue';
import P5 from 'p5';
// @ts-ignore
import ml5 from 'ml5';

interface ClickAxis {
  x: number;
  y: number;
}

interface InferResult extends ClickAxis {
  type: string;
}

type ButtonType = 'blue' | 'red';

export default class NNAxisClassifyService {
  private static instance: NNAxisClassifyService;

  p5Ref: Ref<HTMLDivElement | null>;
  canvasSize = {
    width: 800,
    height: 600,
  };
  inferBlockLength = 20;
  typeColor = {
    red: '#E573738A',
    blue: '#64B5F68A',
  };
  buttonType: ButtonType = 'red';
  records: {
    blue: ClickAxis[];
    red: ClickAxis[];
  } = { blue: [], red: [] };

  nn: any = null;
  results: InferResult[] = [];

  private constructor() {
    this.p5Ref = ref(null);
    this.nn = ml5.neuralNetwork({
      task: 'classification',
      debug: false,
    });
  }

  public static getInstance() {
    if (!NNAxisClassifyService.instance) {
      NNAxisClassifyService.instance = new NNAxisClassifyService();
    }
    return NNAxisClassifyService.instance;
  }

  sketch() {
    return (p: P5) => {
      const radius = 15;
      p.setup = () => {
        p.createCanvas(this.canvasSize.width, this.canvasSize.height);
        p.background(0);
      };
      p.draw = () => {
        p.background(0);
        p.fill('red');
        this.records.red.forEach((record) => {
          p.ellipse(record.x, record.y, radius, radius);
        });
        p.fill('blue');
        this.records.blue.forEach((record) => {
          p.ellipse(record.x, record.y, radius, radius);
        });
        if (this.results.length >= 1) {
          drawResults();
        }
      };
      p.mouseClicked = () => {
        this.records[this.buttonType].push({
          x: p.mouseX,
          y: p.mouseY,
        });
      };
      const drawResults = () => {
        this.results.forEach((res) => {
          const resColor = res.type as 'blue' | 'red';
          if (this.typeColor[resColor]) {
            p.fill(this.typeColor[resColor]);
          } else {
            p.fill(0, 0, 0, 0.87);
          }
          p.rect(res.x, res.y, this.inferBlockLength, this.inferBlockLength);
        });
      };
    };
  }

  initSketch() {
    const p5r = this.p5Ref.value;
    if (p5r) {
      new P5(this.sketch(), p5r);
    }
  }

  toggleButtonType(type: ButtonType) {
    this.buttonType = type;
  }

  async classify() {
    const keys = Object.keys(this.records) as ButtonType[];
    keys.forEach((key) => {
      this.records[key].forEach((item) => {
        const inputs = {
          x: item.x,
          y: item.y,
        };
        const output = {
          type: key,
        };
        this.nn.addData(inputs, output);
      });
    });
    try {
      await this.nn.normalizeData();
    } catch (e) {
      console.error(e);
      throw new Error('标准化数据失败');
    }
    await new Promise((resolve, reject) => {
      this.nn.train(
        {
          epochs: 32,
          batchSize: 12,
        },
        (err: any) => {
          if (err) {
            reject(err);
          }
          resolve('训练完成');
        }
      );
    });
  }

  async infer() {
    const { width, height } = this.canvasSize;
    const colNumber = width / this.inferBlockLength;
    let counter = 0;
    while (
      counter <
      (width * height) / (this.inferBlockLength * this.inferBlockLength)
    ) {
      const x = (counter % colNumber) * this.inferBlockLength;
      const y = Math.floor(counter / colNumber) * this.inferBlockLength;
      this.nn.classify({ x, y }, (err: any, res: any) => {
        this.results.push({
          x,
          y,
          type: res[0].confidence > 0.5 ? res[0].label : res[1].label,
        });
      });
      counter++;
    }
  }
}
