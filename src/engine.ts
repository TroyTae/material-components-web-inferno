import {BACKGROUND_COLOR, DOTS_STYLE} from './constants';
import {getCoordinateX, getCoordinateY} from './coordinates';

export class GameOfLifeEngine {
  public life: Life[][];
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  private intervalKey: null | number;

  constructor(life: Life[][]) {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');

    if (ctx) {
      cvs.width = getCoordinateX(life[0].length);
      cvs.height = getCoordinateY(life.length);

      this.life = life;
      this.canvas = cvs;
      this.context = ctx;
    } else {
      throw 'Failed to create context';
    }
  }

  public clear(bg): void {
    if(!bg){ bg = BACKGROUND_COLOR }
    this.context.fillStyle = bg;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public startLife(dc, sc, bg): void {
    if (!this.intervalKey) {
      this.intervalKey = window.setInterval(() => {
        this.drawDots(dc, sc, bg);
        const life = this.life;
        this.life = life.map((children, i) => (
          children.map((isSurvive, j) => (
            this.nextLife(j, i, isSurvive)
          ))
        ));
      }, 500);
    }
  }

  public stopLife(): void {
    if (this.intervalKey !== null) {
      clearInterval(this.intervalKey);
      this.intervalKey = null;
    }
  }

  protected drawDot(x: number, y: number): void {
    this.context.fillRect(
      getCoordinateX(x),
      getCoordinateY(y),
      DOTS_STYLE.WIDTH,
      DOTS_STYLE.HEIGHT,
    );
  }

  protected drawDots(dc, sc, bg): void {
    this.clear(bg);
    this.life.forEach((children, i) => {
      children.forEach((isSurvive, j) => {
        if(!dc) { dc = DOTS_STYLE.DEAD_COLOR; }
        if(!sc) { sc = DOTS_STYLE.SURVIVE_COLOR; }
        this.context.fillStyle = isSurvive ? sc : dc;
        this.drawDot(j, i);
      });
    });
  }

  protected isSurvive(x: number, y: number): Life {
    return (this.life[y] && this.life[y][x]) ? 1 : 0;
  }

  protected nextLife(x: number, y: number, isSurvive: Life): Life {
    const count = (
      this.isSurvive(x - 1, y - 1) +
      this.isSurvive(x, y - 1) +
      this.isSurvive(x + 1, y - 1) +
      this.isSurvive(x - 1, y) +
      this.isSurvive(x + 1, y) +
      this.isSurvive(x - 1, y + 1) +
      this.isSurvive(x, y + 1) +
      this.isSurvive(x + 1, y + 1)
    );
    return (count === 3 || (isSurvive && count === 2)) ? 1 : 0;
  }
}
