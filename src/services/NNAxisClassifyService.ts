import { Ref, ref } from 'vue';
import P5 from 'p5';

interface ClickAxis {
  x: number;
  y: number;
}

export default class NNAxisClassifyService {
  private static instance: NNAxisClassifyService;

  p5Ref: Ref<HTMLDivElement | null>;
  buttonType: 'blue' | 'red' = 'red';
  records: {
    blue: ClickAxis[];
    red: ClickAxis[];
  } = { blue: [], red: [] };

  private constructor() {
    this.p5Ref = ref(null);
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
        p.createCanvas(800, 600);
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
      };
      p.mouseClicked = () => {
        this.records[this.buttonType].push({
          x: p.mouseX,
          y: p.mouseY,
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

  toggleButtonType(type: 'blue' | 'red') {
    this.buttonType = type;
  }
}
