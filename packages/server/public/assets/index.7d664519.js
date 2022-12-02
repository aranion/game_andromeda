var U = Object.defineProperty;
var M = (a, t, s) =>
  t in a
    ? U(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
    : (a[t] = s);
var i = (a, t, s) => (M(a, typeof t != 'symbol' ? t + '' : t, s), s);
import { e as q, g as L, r as p, b as V, j as N } from './index.e2d0ecb8.js';
import { u as k } from './useLeaderBoard.a0479176.js';
import './selectors.f6ef23e1.js';
const O = a => a.game,
  Y = a => O(a).hightScore,
  v = { canvasBackground: '#000', font: '30px sans-serif', fontColor: '#fff' },
  m = 60,
  S = 100,
  H = 16,
  C = 4;
var A = (a => (
  (a.SpaceshipFly = 'spaceship-fly'),
  (a.IronOreFly = 'iron-ore-fly'),
  (a.NickelOreFly = 'nickel-ore-fly'),
  (a.TitanOreFly = 'titan-ore-fly'),
  (a.GoldOreFly = 'gold-ore-fly'),
  (a.PlatinumOreFly = 'platinum-ore-fly'),
  a
))(A || {});
const G = '/assets/resource.d44af599.png',
  J = {
    [A.SpaceshipFly]: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  },
  D = a => t => a.map(s => [s, t]),
  d = D([0, 1, 1, 2, 2, 1, 1, 0]),
  b = {
    [A.IronOreFly]: d(0),
    [A.NickelOreFly]: d(1),
    [A.TitanOreFly]: d(2),
    [A.GoldOreFly]: d(3),
    [A.PlatinumOreFly]: d(4),
  },
  K = { ...J, ...b };
class Q {
  constructor(t) {
    i(this, 'ctx');
    i(this, 'image');
    i(this, 'isLoaded', !1);
    i(this, 'position');
    i(this, 'radius');
    i(this, 'width');
    i(this, 'height');
    i(this, 'animations', K);
    i(this, 'currentAnimation', null);
    i(this, 'currentAnimationFrame', 0);
    i(this, 'animationFrameLimit', C);
    i(this, 'animationFrameProgress', C);
    i(this, 'isAnimated');
    i(this, 'sizeRatio');
    var s, e, n;
    (this.ctx = t.ctx),
      (this.image = new Image()),
      (this.imageSrc = t.src),
      (this.sizeRatio = (s = t.sizeRatio) != null ? s : 1),
      (this.position = t.position),
      (this.radius = t.radius * this.sizeRatio),
      (this.width = t.width ? t.width * this.sizeRatio : this.radius * 2),
      (this.height = t.height ? t.height * this.sizeRatio : this.radius * 2),
      (this.isAnimated = (e = t.isAnimated) != null ? e : !0),
      this.isAnimated &&
        this.setAnimation(
          (n = t.currentAnimation) != null ? n : A.SpaceshipFly
        );
  }
  get frame() {
    return this.currentAnimation
      ? this.animations[this.currentAnimation][this.currentAnimationFrame]
      : [0, 0];
  }
  set imageSrc(t) {
    (this.isLoaded = !1),
      (this.image.src = t),
      (this.image.onload = () => {
        this.isLoaded = !0;
      });
  }
  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress--;
      return;
    }
    (this.animationFrameProgress = this.animationFrameLimit),
      this.currentAnimationFrame++,
      this.currentAnimationFrame >= this.animationFrameLimit &&
        (this.currentAnimationFrame = 0);
  }
  setAnimation(t) {
    this.currentAnimation !== t &&
      ((this.currentAnimation = t),
      (this.currentAnimationFrame = 0),
      (this.animationFrameLimit =
        this.animations[this.currentAnimation].length),
      (this.animationFrameProgress = this.animationFrameLimit));
  }
  drawImage({ x: t, y: s }) {
    const [e, n] = this.frame;
    this.ctx.drawImage(
      this.image,
      e * (this.width / this.sizeRatio),
      n * (this.height / this.sizeRatio),
      this.width / this.sizeRatio,
      this.height / this.sizeRatio,
      t,
      s,
      this.width,
      this.height
    ),
      this.isAnimated && this.updateAnimationProgress();
  }
  draw() {
    this.image &&
      this.isLoaded &&
      this.drawImage({
        x: this.position.x - this.width / 2,
        y: this.position.y - this.height / 2,
      });
  }
  drawImageLookAt(t) {
    this.image &&
      this.isLoaded &&
      (this.ctx.setTransform(1, 0, 0, 1, this.position.x, this.position.y),
      this.ctx.rotate(
        Math.atan2(t.y - this.position.y, t.x - this.position.x) + Math.PI / 2
      ),
      this.drawImage({ x: -this.width / 2, y: -this.height / 2 }),
      this.ctx.setTransform(1, 0, 0, 1, 0, 0));
  }
  drawImageRotate(t) {
    this.image &&
      this.isLoaded &&
      (this.ctx.setTransform(1, 0, 0, 1, this.position.x, this.position.y),
      this.ctx.rotate(Math.atan2(Math.sin(t), Math.cos(t))),
      this.drawImage({ x: -this.radius, y: -this.radius }),
      this.ctx.setTransform(1, 0, 0, 1, 0, 0));
  }
}
class y {
  constructor(t) {
    i(this, 'canvas');
    i(this, 'ctx');
    i(this, 'position');
    i(this, 'speed');
    i(this, 'radius');
    i(this, 'sprite');
    i(this, 'sizeRatio');
    var s, e, n, r;
    (this.canvas = t.canvas),
      (this.ctx = t.ctx),
      (this.position = (s = t.position) != null ? s : { x: 0, y: 0 }),
      (this.speed = (e = t.speed) != null ? e : S),
      (this.sizeRatio = (n = t.sizeRatio) != null ? n : 1),
      (this.radius = ((r = t.radius) != null ? r : H) * this.sizeRatio),
      (this.sprite = new Q({
        ctx: this.ctx,
        src: t.imageSrc,
        position: this.position,
        radius: this.radius,
        width: t.width,
        height: t.height,
        isAnimated: t.isAnimated,
        currentAnimation: t.currentAnimation,
        sizeRatio: t.sizeRatio,
      }));
  }
  get getPosition() {
    return this.position;
  }
  get getRadius() {
    return this.radius;
  }
  draw(...t) {
    throw new Error('The draw method was not implemented');
  }
  update(...t) {
    throw new Error('The update method was not implemented');
  }
}
const g = (a, t) => Math.floor(Math.random() * (t - a + 1)) + a,
  w = {
    iron: { value: 1, animation: A.IronOreFly },
    nickel: { value: 2, animation: A.NickelOreFly },
    titan: { value: 3, animation: A.TitanOreFly },
    gold: { value: 4, animation: A.GoldOreFly },
    platinum: { value: 5, animation: A.PlatinumOreFly },
  },
  u = 23,
  W = Math.random() * 2 + 1,
  I = Object.keys(w);
class T extends y {
  constructor(s) {
    var n, r, h;
    const e = I[g(0, I.length - 1)];
    super({
      ...s,
      imageSrc: G,
      radius: u,
      width: 64,
      height: 64,
      position: { x: g(u, s.canvas.width - u), y: 0 - u * 2 },
      speed: (n = s.speed) != null ? n : W,
      currentAnimation: w[(r = s.type) != null ? r : e].animation,
    });
    i(this, 'distance', 0);
    i(this, 'counted', !1);
    i(this, 'points');
    this.points = w[(h = s.type) != null ? h : e].value;
  }
  get getDistance() {
    return this.distance;
  }
  get isCounted() {
    return this.counted;
  }
  collect() {
    return (this.counted = !0), this.points;
  }
  draw() {
    this.sprite.draw();
  }
  update(s) {
    this.position.y += this.speed;
    const e = this.position.x - s.getPosition.x,
      n = this.position.y - s.getPosition.y;
    (this.distance = Math.sqrt(e ** 2 + n ** 2)), this.draw();
  }
}
class j extends y {
  constructor(s) {
    super({
      isAnimated: !1,
      position: {
        x: Math.cos(s.moveAngle) > 0 ? -s.radius : s.canvas.width + s.radius,
        y: Math.sin(s.moveAngle) > 0 ? -s.radius : s.canvas.height + s.radius,
      },
      ...s,
    });
    i(this, 'rotateAngle');
    i(this, 'rotateVector');
    i(this, 'rotateSpeed');
    i(this, 'moveAngle');
    i(this, 'distance', 0);
    (this.rotateAngle = 0),
      (this.moveAngle = s.moveAngle),
      (this.rotateVector = s.rotateVector),
      (this.rotateSpeed = s.rotateSpeed);
  }
  get speedDirection() {
    return {
      x: this.speed * Math.cos(this.moveAngle),
      y: this.speed * Math.sin(this.moveAngle),
    };
  }
  get getDistance() {
    return this.distance;
  }
  draw() {
    this.sprite.drawImageRotate(this.rotateAngle);
  }
  update(s) {
    (this.rotateAngle += this.rotateSpeed * this.rotateVector),
      (this.position.x += this.speedDirection.x),
      (this.position.y += this.speedDirection.y),
      (this.distance = Math.sqrt(
        (s.getPosition.x - this.position.x) ** 2 +
          (s.getPosition.y - this.position.y) ** 2
      )),
      this.draw();
  }
}
const Z =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/E0XxlUILEYsUvooERUEsNRZpgkhU8NVsNruJsInLboIEW8HGImAh2vgq/AfaCrYKgqAIIlb+AF+NyHonCSSIzjJ7P87MucycAV/M0jNu/TBksjknHo0EFxaXgo0vtNBOgAGGNN21J2dmYvw7Pu+oU/U2rHr9v+/P0ZI0XB3qmoTHdNvJCU8Ix9ZztuJt4U49rSWFD4VDjhxQ+ErpiTI/K06V+V2xMxefAp/qGUzVcKKG9bSTER4U7s1Yeb1yHnWTViM7Pyu1W2YPLnGiRAiSIM8qFjnCUrOS2d++4ZJvmjXx6PK3KeCII0VavCFR89LVkGqKbshnUVC5/87TNUdHyt1bI9Dw5HlvfdC4A99Fz/s68rzvY/A/wkW26l+TnMY/RC9Wtd4DCGzC2WVVS+zC+RZ0Pdiao5Ukv0yfacLrKbQtQscNNC+Xs6qsc3IPcxvyRNewtw/9sj+w8gMeQmgYRBrr9wAAAAlwSFlzAAAWJAAAFiQBmxXGFAAAA3VJREFUeNrtm6tvVFEQh7tkLaKk1NZBspgmgELwSDEYKqAKBUEQBPwpIAiCgEIBAhAYCA+BaptgaFLc2i0BwR9QuiQDs4eZc2bOPfe1+Y3ptrt7e/f2+8487ulgoWPx4N6TffYtPX5NP7h99/p6l8730AICF7DNGLSsaJE40HoAAkFgs9R1hUYQiAvYbgzb/OXfvm6aXnfsxGnzMc+euZBcLj59fj8AgVAYWTgrC1u1ncZ4svfn68ry0Sydnz1/6jrPHLVBYJcJJPJyqOPk8Z95gt7/ZWdXfc325NffxyeXD7upBIFIInOm8J2bt4q1bbnqhgpb4/HHLVVlTWcQCIXnSOGpvjzj8QwnZbrV0fFaVfYqTKFlbUnhYW4/qV2EVFmQUyiPJ2/MH/7i+UuVe/PIH3Y/vJBQGGtguzH0qLtx9VrR3tOqG1dcWg9z17owaPnQOidS+0BhEFgLgTnUxbJs1ZBIKEVbqWYBBCKJdFBhr7apWFw6kqWg1Jumim+uvWf4CgKh8BwoXFXdUK+UQqSb1nuSurw9XFzaqz0jS1NxEFgXgVX3rXjudzQRs53KZtIEfv45Ux8QiCTS8VbOs+iHSaSU3p72UBo88HliOMCY1dt2vvcfPcQ8EAr3ReG3H/7h//P7j/9aszBiuwByaslYlqXfpb2HdPa2dNRChnHj3CkQ2AiB2uIfI4+IkO7EaQlBfu1ulEaeJMgIT/djryF16kAgkkhP68BU3fVuZ+yq46qO/6035r2fZc0xWACBULhlhfl/9khb01L3ZEu1YNbgdaakMEb6fSPQsyEyNZ2dEpeqA3PqstzJs1TPhp1SqtYEgVC42zGzYVDSWVq0Y4uzd4ORpV2UWjZPHRhu+tSSm/V4mAdC4R5lYY41qRBTWHp9bktG79czu+34pSoDri4IbCqJxGooK01aB0P1ljYBtnY6GmHa82ujFXPNx8/95asXIBBJpGtJpGrrFOqxPdmKDhO44rnq1h2eocnQcwAqcrXC1pL9Vkf+NU47Jj3WCmPteev5Q2GsgT0rYyjWL1/J2vKm3RPhwW8TSoVyStvSwUuaVKCMgcI9UbiKzhaNJZ2lbseqbnq3Q1ltQWCTBDZFo0SH9f0eokpQBwKRRHqqcMmascQSkKuuR1EQCIXnXOEmlW46w4LAPhLYBo2lqQKBuID9id+LyYzRZ99L6AAAAABJRU5ErkJggg==',
  X =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/E0XxlUILEYsUvooERUEsNRZpgkhU8NVsNruJsInLboIEW8HGImAh2vgq/AfaCrYKgqAIIlb+AF+NyHonCSSIzjJ7P87MucycAV/M0jNu/TBksjknHo0EFxaXgo0vtNBOgAGGNN21J2dmYvw7Pu+oU/U2rHr9v+/P0ZI0XB3qmoTHdNvJCU8Ix9ZztuJt4U49rSWFD4VDjhxQ+ErpiTI/K06V+V2xMxefAp/qGUzVcKKG9bSTER4U7s1Yeb1yHnWTViM7Pyu1W2YPLnGiRAiSIM8qFjnCUrOS2d++4ZJvmjXx6PK3KeCII0VavCFR89LVkGqKbshnUVC5/87TNUdHyt1bI9Dw5HlvfdC4A99Fz/s68rzvY/A/wkW26l+TnMY/RC9Wtd4DCGzC2WVVS+zC+RZ0Pdiao5Ukv0yfacLrKbQtQscNNC+Xs6qsc3IPcxvyRNewtw/9sj+w8gMeQmgYRBrr9wAAAAlwSFlzAAAWJAAAFiQBmxXGFAAABFFJREFUeNrtXL9rFEEUvguWUVBisNLuBAMqqJWFP0ALGy3UyiqSQlIktYWN/4AWEkG0stIUSWMj+KPQJgnYREisBKtTtJAcgj9vkhvzdnbezHszuze7d+81l+R2Z+++fN/33pud2UZDQkJCYnijWeUPd+rk2b/m316/edEUAAOAs0UVwBwREQqAAmDZUh94D8SAuHrlWu5vT54+rpQvioQjY0eKi166eDnDuHNnLliPW19d2nxtTZwIZnPZjBQG1skDZ6Zu5LxOsUszzfYexkod796vsT5D0YwUBqZkoK+MOHroIIlZGANtx8NjsXGorCyCjcLAFFk4VQFLZaora8MxugwUD6yVB/qYZ+scbAz42P7srQEpzOPUh54687Z6nZ6dvJUEQApwWDx/+Szz+4HxvWRgTGCp51mu2emdv6sH5G+RsPTCA+SBZUgXkxPFEzEZQ281bcF3jIqFxXl2XcgqY7DCOCbglwsJFyAiYfFA6UQy0jXl0poo5kPAcYsaE/NU1/hdO9n0+rsP5pqFAtjPlky9F1oHxvqqvu7MVON/0vSB6UXaNocX0wn4+lnFxlAANJO5mdyMm3P3t5Q3NppLnCag4oGSRCpYSLtkmyLgBOnusT1erwudZNBFfefnViv89sOnzPvHxndmJK3k3KQApr/ASvt7bsCQAhtm3W9fvmbeUwBpYPR1IWghCQMD1HeP2RddPP6IhMUDExfSVPlCyQIK9yQc/gFMeSpJa1m6pBtTOmkLwRoEzCIsN6tGogppE1DbRbj+yAHN9D8FhOmp5vVhnUmZiIDH5L/Lmkg4uoyxSRiySKGO3Wc1/yMPXy0HsTZmmgwrcaAlYONzp8JsGV8YWMZsDKz3VtrLjeunj1tPpjDONjZkoWKHqy7EakSqZ1JqSGoSkTKmrFbO9EEfszSDzM6EGpDRZuaEjLGx0ZZVQ7wr1G/bv7a73/OHW/lemAJm0QD6AgLpSjh6LC5gWJK0fb8j+/dt+9+PDZGwtHJVzMKY3PJ+lJcCRda+2i20S7FJ15RnqO1A2epQ6wtLnQ/EAHWVMTHJgHI9DoC2+T+RsHhgBetAV3BWo1J6WlUWmf1waC9M9VxTltg5thn2rr2M6p8XFuc32ACGgokBHGvqoX7GmcyAtwCmZyebUVkYhl7VrpMMd49GiqCwHbtnsr661BEPlCRS8yTi8kKXd9hC3Ub0JQxoCz6PsyUEV+GP9c5YUBZcRgFoRsiKVd9amaKDc0+EAqBIWDywhh7oknLswnO46FxLjbtekLs2xrVvxLdnpNTdmmXsXHJ5ZoqdSyLhlBLmtnhF7B/G9g6HMNA8n7M2WhhYUBSyyFz3yP3eR4w9byH2uQrCwLp5IIx7dx55WejzuH49xUOemTCIDOSy0VbIup5kFOtn8tyYYWKgCsotUk79Rpm9CannKgsgF8zY6Cd4ImEBcAg8sGwZ91uyyQHkAJoaHJGwACgx8PEPW8Mo2xEcs9gAAAAASUVORK5CYII=',
  _ =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/E0XxlUILEYsUvooERUEsNRZpgkhU8NVsNruJsInLboIEW8HGImAh2vgq/AfaCrYKgqAIIlb+AF+NyHonCSSIzjJ7P87MucycAV/M0jNu/TBksjknHo0EFxaXgo0vtNBOgAGGNN21J2dmYvw7Pu+oU/U2rHr9v+/P0ZI0XB3qmoTHdNvJCU8Ix9ZztuJt4U49rSWFD4VDjhxQ+ErpiTI/K06V+V2xMxefAp/qGUzVcKKG9bSTER4U7s1Yeb1yHnWTViM7Pyu1W2YPLnGiRAiSIM8qFjnCUrOS2d++4ZJvmjXx6PK3KeCII0VavCFR89LVkGqKbshnUVC5/87TNUdHyt1bI9Dw5HlvfdC4A99Fz/s68rzvY/A/wkW26l+TnMY/RC9Wtd4DCGzC2WVVS+zC+RZ0Pdiao5Ukv0yfacLrKbQtQscNNC+Xs6qsc3IPcxvyRNewtw/9sj+w8gMeQmgYRBrr9wAAAAlwSFlzAAAWJAAAFiQBmxXGFAAAAopJREFUeNrtnD8vBFEUxWdEqyBsqyNZzSaotljxHahURCEKPgqFKIRKRa8h/hQqJBoSum0RCh9gRbHJ25e5M/fNvN15s/mdbjZz58/NOefe+2Z24iggtJrLnSLxd/fX8aCveSQCJLBMxGVfwM7mVqZsn1/folClDQNJIAnEA334nA9IXtmoz/Zs7x8dxjAwEIyGzLyi1RcPpIiQQNBvDzzYO3H2ufeXB2+eZ1dYEzNzi4m/t5pvHV8TCwxEwhVspPPI1lXOaRLUHss1XsL27noMA5FwBSXcnSR8SSFLdkXPI9mB7+s3JQ0DkTAJHB4PlFZPbA85Oz9NPNjqylpQXgUDh2UWthkzPjmRuN/lzUXP9nRtCg8EJJAEBl2FNc8t2h+fubzNjnON16wPplX+tIUKX9cPA5FwwG1Ml8K25CRp2e1NN06SQhakdunn6zuxqZf2z9tOaeJgIBKuwCSilZYEU3K2NEw7ePr4TYyfr431bJtP4sz4q9d2Ypx9fulYWpjnhIFImAQOvwfmnUR8wfbGRt0tzvZQ6d7y3BcM7CcDpUbY3LYrX1r1zILr/nkZLJ1HO7ub79DAQIoICRz+Kmx38tLEoK2CZicvTRV5/S0JG0sLhZKU9lY/DETC5UL1YN2WllbCru2JdrA/vn1U7aeRbtE/3cBAJByQhG1oJJ0mZ0m6rhaghbba8l85JEwCgcYDs7wwq93pl+dJ3iq1QT49DwaWwUAb2g/kSIzQVnFNI65pvmEgRYQEgjI8UPI3aWLQrgdqvPUfg/gYGQwkgRWUsKuctY10nqX3NNkjYSSMhPsub80koa3OfAIUCZNAEJIHuk4uWpThdTCwygz0zUgYSBEBJBAAAKLoDzZM/wKYZ2w/AAAAAElFTkSuQmCC',
  $ =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAABb2lDQ1BpY2MAACiRdZE7SwNBFIU/E0XxlUILEYsUvooERUEsNRZpgkhU8NVsNruJsInLboIEW8HGImAh2vgq/AfaCrYKgqAIIlb+AF+NyHonCSSIzjJ7P87MucycAV/M0jNu/TBksjknHo0EFxaXgo0vtNBOgAGGNN21J2dmYvw7Pu+oU/U2rHr9v+/P0ZI0XB3qmoTHdNvJCU8Ix9ZztuJt4U49rSWFD4VDjhxQ+ErpiTI/K06V+V2xMxefAp/qGUzVcKKG9bSTER4U7s1Yeb1yHnWTViM7Pyu1W2YPLnGiRAiSIM8qFjnCUrOS2d++4ZJvmjXx6PK3KeCII0VavCFR89LVkGqKbshnUVC5/87TNUdHyt1bI9Dw5HlvfdC4A99Fz/s68rzvY/A/wkW26l+TnMY/RC9Wtd4DCGzC2WVVS+zC+RZ0Pdiao5Ukv0yfacLrKbQtQscNNC+Xs6qsc3IPcxvyRNewtw/9sj+w8gMeQmgYRBrr9wAAAAlwSFlzAAAWJAAAFiQBmxXGFAAAA7JJREFUeNrtnD1vE0EQhs8oLQWIpE0HkmkikVQUfAgaKhqoqIgoEAV0/A0oohQIKiroKNKA+CioAImGSKZza6JQ8AOCHGmtYT1zM7O79u2hd6rDd76c795n3tnZPQbNAuPhvftHzRLi6bPdQdNRnGgQuIFdxqBLbMeTX6bj1tdWq8UdCuxagRbFWZUWx7v9cev+a8P1JOWWVCEUiBvYI4Q1XGNUNQQ1LK3f11D2GpIHcSgQCFeIsBfVVGy3L2/OffZ9fzTb/jb5YzrPhbWTru9Q5DWkNZyhwJIK5JTnqeEs6qOqC2qjqqFq8ioxJTgD8tSPUCBMpNtYSRl6/T44LIIX910OZ80kOOzpsdJ+i0lqJgMFAuGKEA7SlWRLazRvfVYKce780nHSfq0OpAhr6WzFO07UbtLG8Jy7kH7+8WtVqqL3QbuBQBg5sOMcmDL1ePvWHXHfzx9f3BfBjYmlkUqJXEvLMLrNpR+UMV2Phanzhid09vyWeMJXr18mGUpbSO5vPX/c4ZEUaz0fHRNDgTCRyk2Ek7VkFFNUaMLfGJa5SHoN3mJ+/jeMkutWKBAIV4gwdZSUuRBaJ8X1WsCtlBt7g6sW2iqIlBoWCsxV4M6TF0dtTyJ1Xcu/irQnfk2t2v42hVkDDVWYSI8QLin36RDJOs8hNwlGZlxLm1T4LXR6dhsIA+H+IUydbDzZm22H3tmpM6dbHNLuuFxXJBdHrpazOvPMcQnCdLqB61tCgZkx4OpA7enm9uckMyhRJ2ojJ9qBTj03+oEwkZ4i7B2Aa8lbSwlcveiZFA/7rSki/B3PAkwoEAh3XAc+eHR35igpOJfofpQMipwF3dzVr1BgronQf1y6ePVYgW0rDzyGkqvOxzu7cyMWa4PBGpwCpZUSUCBMpCfNBLo8Q8OZYhsjG/bRz9uOz0EJCgTCQLix4vz2w55QE/LDKvo5h7OEMtey1+amF133TQPdmEXVgXE9KD19qac2PZYbzEsK4xoRXB0ndcC5uH7lxhw9VtVpphWu7dPn91AgTKRmhGnQBUfaMg9LMteWTeQinGouluEgRdfswlyILxtG7wtbZ92kC069cakRZuA8q/6BMHJg5YV0TjHKva/LvTYhrYEOOSxniV1bioh/C4cul/egQCDcozJGKmli57KG9n/FcCMfWo54utx0HG8JDVcosEYFLiNKqy5FaVAgTOQ/QNiLcmg85q6/8QRdKAAFAmEgXDwWgfOysYUC+6xAp0LD9huitpvIgTARRIi/MPHVC6kyUeIAAAAASUVORK5CYII=',
  F = [Z, X, _, $],
  l = { maxSpeed: 10, maxRotateSpeed: 0.1, radius: 40, isAnimated: !1 };
function tt() {
  const a = Math.random();
  return {
    isAnimated: l.isAnimated,
    radius: l.radius,
    speed: a * l.maxSpeed,
    rotateSpeed: a * l.maxRotateSpeed,
    rotateVector: a > 0.5 ? 1 : -1,
    moveAngle: a * 2 * Math.PI,
    imageSrc: F[g(0, 3)],
  };
}
function st() {
  return {
    type: 'sprite',
    quantity: 10,
    particleConfig: {
      imageSrc: F[g(0, 3)],
      radius: 20,
      maxSpeed: 5,
      sizeRatio: 0.3,
    },
  };
}
const it = {
  type: 'circle',
  quantity: 5,
  particleConfig: { color: 'grey', maxRadius: 5, maxSpeed: 5 },
};
class et {
  constructor(t) {
    i(this, 'ctx');
    i(this, 'moveAngle');
    i(this, 'type');
    i(this, 'imageSrc');
    i(this, 'radius');
    i(this, 'color');
    i(this, 'speed');
    i(this, 'position');
    i(this, 'sizeRatio');
    i(this, 'sprite');
    var s, e, n;
    (this.ctx = t.ctx),
      (this.position = { x: t.position.x, y: t.position.y }),
      (this.sizeRatio = (s = t.sizeRatio) != null ? s : 1),
      (this.radius = t.radius * this.sizeRatio),
      (this.moveAngle = t.moveAngle),
      (this.speed = t.speed),
      (this.type = t.type),
      (this.imageSrc = t.imageSrc),
      (this.color = (e = t.color) != null ? e : 'grey'),
      this.type === 'sprite' &&
        this.imageSrc &&
        (this.sprite = new Q({
          ctx: t.ctx,
          src: this.imageSrc,
          position: this.position,
          radius: t.radius,
          isAnimated: (n = t.isAnimated) != null ? n : !1,
          sizeRatio: t.sizeRatio,
        }));
  }
  set setPosition(t) {
    (this.position.x = t.x), (this.position.y = t.y);
  }
  get getPosition() {
    return { x: this.position.x, y: this.position.y };
  }
  get getRadius() {
    return this.radius;
  }
  drawCircle() {
    (this.ctx.fillStyle = this.color),
      this.ctx.beginPath(),
      this.ctx.arc(
        this.position.x,
        this.position.y,
        this.radius,
        0,
        Math.PI * 2
      ),
      this.ctx.closePath(),
      this.ctx.fill();
  }
  draw() {
    this.sprite && this.type === 'sprite'
      ? this.sprite.draw()
      : this.drawCircle();
  }
  update() {
    (this.position.x += this.speed * Math.cos(this.moveAngle)),
      (this.position.y += this.speed * Math.sin(this.moveAngle)),
      this.draw();
  }
}
const P = a => ({ x: a.width, y: a.height }),
  B = ({ object: a, canvas: t }) => {
    const s = a.getPosition,
      e = Object.keys(s),
      n = 2 * a.getRadius,
      r = P(t);
    let h = !1;
    for (const o of e) h = a.getPosition[o] > r[o] + n || a.getPosition[o] < -n;
    return h;
  },
  at = 2e3,
  nt = 20;
class x {
  constructor(t) {
    i(this, 'canvas');
    i(this, 'ctx');
    i(this, 'particleGroup', []);
    i(this, 'disappearingSpeed');
    i(this, 'isEndless');
    i(this, 'opacity', 1);
    i(this, 'isDisappeared', !1);
    i(this, 'isDisappearing', !1);
    var s, e;
    (this.canvas = t.canvas),
      (this.ctx = t.ctx),
      (this.isEndless = (s = t.isEndless) != null ? s : !1),
      (this.disappearingSpeed =
        m / ((e = t.disappearanceTime) != null ? e : at)),
      this.setDisappearDelay(),
      this.createParticles(t);
  }
  get isFaded() {
    return this.isDisappeared;
  }
  randomizePosition() {
    return {
      x: this.canvas.width * Math.random(),
      y: this.canvas.height * Math.random(),
    };
  }
  setDisappearDelay(t) {
    this.isEndless ||
      (t
        ? setTimeout(() => {
            this.isDisappearing = !0;
          }, t)
        : (this.isDisappearing = !0));
  }
  createParticles(t) {
    var s, e, n, r;
    for (let h = 0; h < t.quantity; h++) {
      const o = Math.random(),
        c =
          (e = t.particleConfig.radius) != null
            ? e
            : ((s = t.particleConfig.maxRadius) != null ? s : nt) * o,
        R = t.isRandomPosition
          ? this.randomizePosition()
          : (n = t.position) != null
          ? n
          : { x: 0, y: 0 },
        f = (r = t.moveAngle) != null ? r : 2 * Math.PI * o,
        z = t.particleConfig.maxSpeed * o;
      this.particleGroup.push(
        new et({
          ctx: this.ctx,
          type: t.type,
          ...t.particleConfig,
          radius: c,
          speed: z,
          position: R,
          moveAngle: f,
          isAnimated: t.isAnimated,
          currentAnimation: t.currentAnimation,
        })
      );
    }
  }
  getOppositeAxis(t) {
    return t === 'x' ? 'y' : 'x';
  }
  normalizePosition(t) {
    const s = t.getPosition,
      e = t.getRadius,
      n = P(this.canvas),
      r = { x: 0, y: 0 };
    for (const h in r) {
      const o = h,
        c = this.getOppositeAxis(o);
      s[o] - e >= n[o]
        ? ((r[o] = -e), (r[c] = Math.random() * n[c]))
        : s[o] + e < 0 && ((r[c] = -e), (r[o] = Math.random() * n[o]));
    }
    t.setPosition = r;
  }
  draw() {
    this.ctx.save(), (this.ctx.globalAlpha = this.opacity);
    for (let t = 0; t < this.particleGroup.length; t++) {
      const s = this.particleGroup[t];
      s.update(),
        B({ object: s, canvas: this.canvas }) &&
          (this.isEndless
            ? this.normalizePosition(s)
            : (this.particleGroup.splice(t, 1), t--));
    }
    this.ctx.restore();
  }
  update() {
    this.isDisappearing &&
      (this.opacity - this.disappearingSpeed > 0
        ? (this.opacity -= this.disappearingSpeed)
        : (this.isDisappeared = !0)),
      this.draw();
  }
}
function rt() {
  return {
    type: 'circle',
    quantity: 100,
    isEndless: !0,
    isRandomPosition: !0,
    moveAngle: Math.PI / 2,
    particleConfig: { maxRadius: 2, maxSpeed: 0.5, color: 'white' },
  };
}
class ot {
  constructor(t) {
    i(this, 'canvas');
    i(this, 'ctx');
    i(this, 'spawnInterval');
    i(this, 'sceneTransition');
    i(this, 'score', 0);
    i(this, 'player');
    i(this, 'resources', []);
    i(this, 'asteroids', []);
    i(this, 'particlesGroups', []);
    (this.canvas = t.canvas),
      (this.ctx = t.ctx),
      (this.spawnInterval = t.spawnInterval),
      (this.player = t.player),
      (this.sceneTransition = t.sceneTransition),
      this.createStarsBackground();
  }
  get getScore() {
    return this.score;
  }
  isCollided(t) {
    return t && t.getDistance < t.getRadius + this.player.getRadius;
  }
  createStarsBackground() {
    this.particlesGroups.push(
      new x({ canvas: this.canvas, ctx: this.ctx, ...rt() })
    );
  }
  handleResources(t) {
    t % this.spawnInterval.resource === 0 &&
      this.resources.push(new T({ canvas: this.canvas, ctx: this.ctx }));
    for (let s = 0; s < this.resources.length; s++) {
      const e = this.resources[s];
      e.update(this.player),
        B({ object: e, canvas: this.canvas }) &&
          (this.resources.splice(s, 1), s--),
        this.isCollided(e) &&
          !e.isCounted &&
          ((this.score += e.collect()),
          this.resources.splice(s, 1),
          this.particlesGroups.push(
            new x({
              canvas: this.canvas,
              ctx: this.ctx,
              position: { x: e.getPosition.x, y: e.getPosition.y },
              ...it,
            })
          ),
          s--);
    }
  }
  handleAsteroids(t) {
    if (t % this.spawnInterval.asteroid === 0) {
      const s = tt();
      this.asteroids.push(new j({ canvas: this.canvas, ctx: this.ctx, ...s }));
    }
    for (let s = 0; s < this.asteroids.length; s++) {
      const e = this.asteroids[s];
      e.update(this.player),
        B({ object: e, canvas: this.canvas }) &&
          (this.asteroids.splice(s, 1), s--),
        this.isCollided(e) &&
          (this.player.updateLives(-1, this.score),
          this.asteroids.splice(s, 1),
          this.particlesGroups.push(
            new x({
              canvas: this.canvas,
              ctx: this.ctx,
              position: { x: e.getPosition.x, y: e.getPosition.y },
              ...st(),
            })
          ),
          s--);
    }
  }
  handleParticles() {
    for (let t = 0; t < this.particlesGroups.length; t++) {
      const s = this.particlesGroups[t];
      s.update(), s.isFaded && (this.particlesGroups.splice(t, 1), t--);
    }
  }
  clear() {
    (this.asteroids = []),
      this.particlesGroups.splice(1, this.particlesGroups.length - 1),
      (this.resources = []),
      this.player.clear(),
      (this.score = 0);
  }
  drawUI() {
    (this.ctx.fillStyle = v.fontColor),
      this.ctx.fillText(`Score: ${this.score}`, 10, 50),
      this.ctx.fillText(`Lives: ${this.player.getLives}`, 10, 100);
  }
  draw() {
    (this.ctx.fillStyle = v.canvasBackground),
      (this.ctx.font = v.font),
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  update({ frame: t }) {
    this.draw(),
      this.handleParticles(),
      this.player.update(),
      this.handleResources(t),
      this.handleAsteroids(t),
      this.drawUI(),
      this.sceneTransition.update();
  }
}
class At {
  constructor(t) {
    i(this, 'canvas');
    i(this, 'mousePosition');
    i(this, 'handleMouseMove', t => {
      (this.mousePosition.x = t.x), (this.mousePosition.y = t.y);
    });
    (this.canvas = t.canvas),
      (this.mousePosition = {
        x: this.canvas.width / 2,
        y: this.canvas.height / 2,
      });
  }
  get getDirections() {
    return this.mousePosition;
  }
  mount() {
    this.canvas.addEventListener('mousemove', this.handleMouseMove);
  }
  unmount() {
    this.canvas.removeEventListener('mousemove', this.handleMouseMove);
  }
}
const ht = {
  text: 'Your ship was consumed by the cosmic void...',
  cssClassName: 'game__label-game-over',
};
function ct(a) {
  return {
    text: 'New Game',
    cssClassName: 'game__button-game-over',
    handleClick: t => {
      t.clear();
    },
  };
}
class dt extends y {
  constructor(s) {
    var e;
    super({ ...s, imageSrc: s.imageSrc.healthy });
    i(this, 'status', 'unmounted');
    i(this, 'direction');
    i(this, 'lives');
    i(this, 'maxLives');
    i(this, 'shielded');
    i(this, 'skin');
    i(this, 'sceneTransition');
    (this.status = 'mounted'),
      (this.direction = s.direction),
      (this.lives = s.lives),
      (this.maxLives = s.maxLives),
      (this.shielded = (e = s.shielded) != null ? e : !1),
      (this.skin = s.imageSrc),
      (this.sceneTransition = s.sceneTransition),
      this.updateSkin();
  }
  get getLives() {
    return this.lives;
  }
  get isShielded() {
    return this.shielded;
  }
  updateLives(s, e) {
    const n = this.lives + s;
    if (n <= 0) {
      this.sceneTransition.createLabel(ht),
        this.sceneTransition.createButton(ct(this.sceneTransition.getGame)),
        this.sceneTransition.darkScreen(2e3),
        this.dispatchScore(e);
      return;
    }
    (this.lives = n > this.maxLives ? this.maxLives : n), this.updateSkin();
  }
  updateSkin() {
    this.lives === 1 && (this.sprite.imageSrc = this.skin.wrecked),
      this.lives === 2 && (this.sprite.imageSrc = this.skin.damaged),
      this.lives === 3 && (this.sprite.imageSrc = this.skin.battered),
      this.lives > 3 && (this.sprite.imageSrc = this.skin.healthy);
  }
  keepInsideCanvas() {
    this.position.x <= this.radius && (this.position.x = this.radius),
      this.position.x >= this.canvas.width - this.radius &&
        (this.position.x = this.canvas.width - this.radius),
      this.position.y <= this.radius && (this.position.y = this.radius),
      this.position.y >= this.canvas.height - this.radius &&
        (this.position.y = this.canvas.height - this.radius);
  }
  draw() {
    this.status === 'mounted' && this.sprite.drawImageLookAt(this.direction);
  }
  update() {
    const s = this.position.x - this.direction.x,
      e = this.position.y - this.direction.y;
    this.direction.x !== this.position.x && (this.position.x -= s / this.speed),
      this.direction.y !== this.position.y &&
        (this.position.y -= e / this.speed),
      this.keepInsideCanvas(),
      this.draw();
  }
  clear() {
    this.updateLives(this.maxLives - this.lives - 1, 0),
      (this.position.x = this.canvas.width / 2),
      (this.position.y = this.canvas.height);
  }
  dispatchScore(s) {
    q.dispatch(L.setHightScore(s));
  }
}
const pt =
    'data:image/png;base64,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',
  ut =
    'data:image/png;base64,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',
  lt =
    'data:image/png;base64,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',
  mt =
    'data:image/png;base64,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',
  gt = { base: { healthy: pt, battered: ut, damaged: lt, wrecked: mt } },
  E = { speed: S, radius: 34, lives: 4, maxLives: 5, imageSrc: gt.base },
  vt = {
    level_1: { spawnInterval: { alien: 0, asteroid: 100, resource: 200 } },
  },
  xt = 3e3;
class wt {
  constructor(t) {
    i(this, 'game');
    i(this, 'canvas');
    i(this, 'ctx');
    i(this, 'opacity', 0);
    i(this, 'opacitySpeed', 0);
    i(this, 'labelsId', []);
    i(this, 'buttonsId', []);
    (this.game = t.game), (this.canvas = t.canvas), (this.ctx = t.ctx);
  }
  darkScreen(t = xt, s) {
    (this.opacitySpeed = m / t),
      s &&
        setTimeout(() => {
          this.opacitySpeed = -m / t;
        }, t + s);
  }
  createLabel(t) {
    const s = document.createElement('label'),
      e = `l${Date.now().toString()}`,
      n = document.querySelector('.canvas');
    this.labelsId.push(e),
      s.classList.add(t.cssClassName),
      (s.innerText = t.text),
      (s.id = e),
      n && n.before(s),
      t.deleteDelay &&
        setTimeout(() => {
          s.remove();
        }, t.deleteDelay);
  }
  createButton(t) {
    const s = document.createElement('button'),
      e = `b${Date.now().toString()}`,
      n = document.querySelector('canvas');
    this.buttonsId.push(e),
      s.classList.add(t.cssClassName),
      s.classList.add('button'),
      (s.innerText = t.text),
      (s.id = e),
      s.addEventListener('click', () => t.handleClick(this.game)),
      n && n.before(s),
      t.deleteDelay &&
        setTimeout(() => {
          s.remove();
        }, t.deleteDelay);
  }
  get getGame() {
    return this.game;
  }
  deleteObjects() {
    this.labelsId.forEach(t => {
      const s = document.querySelector(`label#${t}`);
      s == null || s.remove();
    }),
      this.buttonsId.forEach(t => {
        const s = document.querySelector(`button#${t}`);
        s == null || s.remove();
      }),
      (this.labelsId = []),
      (this.buttonsId = []);
  }
  draw() {
    this.ctx.save(),
      (this.ctx.globalAlpha = this.opacity),
      (this.ctx.fillStyle = 'black'),
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height),
      this.ctx.restore();
  }
  update() {
    this.opacity + this.opacitySpeed > 1
      ? ((this.opacity = 1), (this.opacitySpeed = 0))
      : this.opacity + this.opacitySpeed < 0
      ? ((this.opacity = 0), (this.opacitySpeed = 0), this.deleteObjects())
      : (this.opacity += this.opacitySpeed),
      this.draw();
  }
  clear() {
    this.deleteObjects(), (this.opacity = 0), (this.opacitySpeed = 0);
  }
}
class Bt {
  constructor(t) {
    i(this, 'canvas', null);
    i(this, 'ctx', null);
    i(this, 'map', null);
    i(this, 'directions');
    i(this, 'player');
    i(this, 'sceneTransition');
    i(this, 'status', 'unmounted');
    i(this, 'frame', 0);
    i(this, 'resize', t => {
      const s = t.target;
      this.canvas &&
        ((this.canvas.width = s.innerWidth),
        (this.canvas.height = s.innerHeight));
    });
    const { canvas: s, ctx: e } = this.initCanvas(t.canvas);
    (this.directions = new At({ canvas: s })),
      (this.sceneTransition = new wt({ game: this, canvas: s, ctx: e })),
      (this.player = new dt({
        canvas: s,
        ctx: e,
        sceneTransition: this.sceneTransition,
        direction: this.directions.getDirections,
        position: { x: s.width / 2, y: s.height + E.radius * 2 },
        ...E,
      }));
  }
  startGameLoop() {
    this.status = 'running';
    let t = performance.now();
    const s = 1e3 / m,
      e = n => {
        if (this.status === 'unmounted') return;
        n - t >= s && ((t = n), this.render(), this.frame++),
          requestAnimationFrame(() => e(performance.now()));
      };
    e(performance.now());
  }
  startMap(t) {
    this.canvas &&
      this.ctx &&
      (this.map = new ot({
        ...t,
        sceneTransition: this.sceneTransition,
        canvas: this.canvas,
        ctx: this.ctx,
        player: this.player,
      }));
  }
  initCanvas(t) {
    if (
      ((this.canvas = t),
      (this.canvas.width = window.innerWidth),
      (this.canvas.height = window.innerHeight),
      (this.ctx = this.canvas.getContext('2d')),
      !this.ctx)
    )
      throw new Error(
        'The canvas context has not been created. The game cannot be initialized!'
      );
    return { canvas: this.canvas, ctx: this.ctx };
  }
  render() {
    var t;
    (t = this.map) == null || t.update({ frame: this.frame });
  }
  mount() {
    this.directions.mount(), window.addEventListener('resize', this.resize);
  }
  set setStatus(t) {
    this.status = t;
  }
  clear() {
    var t;
    (t = this.map) == null || t.clear(), this.sceneTransition.clear();
  }
  unmount() {
    var t;
    (this.status = 'unmounted'),
      this.directions.unmount(),
      (t = this.map) == null || t.clear(),
      this.sceneTransition.clear(),
      window.removeEventListener('resize', this.resize);
  }
  init() {
    this.mount(), this.startMap(vt.level_1), this.startGameLoop();
  }
}
function St() {
  const a = p.exports.useRef(null),
    t = p.exports.useRef(null),
    s = V(Y),
    { addTeamLeader: e } = k();
  return (
    p.exports.useLayoutEffect(() => {
      var n;
      return (
        a != null &&
          a.current &&
          ((t.current = new Bt({ canvas: a.current })),
          (n = t.current) == null || n.init()),
        () => {
          var r;
          (r = t == null ? void 0 : t.current) == null || r.unmount();
        }
      );
    }, [a]),
    p.exports.useEffect(() => {
      s && e(s);
    }, [s]),
    N('canvas', { className: 'canvas', ref: a })
  );
}
export { St as default };
