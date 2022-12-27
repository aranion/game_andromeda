export const cursor = {
  delay: 8,
  _x: 0,
  _y: 0,
  endX: window.innerWidth / 2,
  endY: window.innerHeight / 2,
  cursorVisible: true,
  cursorEnlarged: false,
  $dot: null as HTMLDivElement | null,
  $outline: null as HTMLDivElement | null,
  dotSize: 0,
  outlineSize: 0,
  cursorPointer: '',
  cursor: '',
  size: 50,

  init: function (cursor: string, cursorPointer: string, size?: number) {
    this.cursorPointer = cursorPointer;
    this.cursor = cursor;
    this.size = size ?? 50;

    this.createCursor();

    this.dotSize = this.$dot?.offsetWidth ?? 0;
    this.outlineSize = this.$outline?.offsetWidth ?? 0;

    this.setupEventListeners();
    this.animateDotOutline();
  },

  createCursor: function () {
    const cursorDot = document.createElement('div');
    const cursorDotOutline = document.createElement('div');

    cursorDot.classList.add('cursor-dot');
    cursorDotOutline.classList.add('cursor-dot-outline');
    this.addCursorStyle(cursorDot);
    this.addCursorDefaultStyle(cursorDot);
    this.addCursorStyle(cursorDotOutline);

    document.body.after(cursorDot, cursorDotOutline);

    this.$dot = cursorDot;
    this.$outline = cursorDotOutline;
  },

  addCursorDefaultStyle: function (elem: HTMLDivElement) {
    elem.style.zIndex = '99999999';
    elem.style.width = `${this.size}px`;
    elem.style.height = `${this.size}px`;
    elem.style.backgroundRepeat = ' no-repeat';
    elem.style.backgroundPosition = 'center';
    elem.style.backgroundSize = `${this.size}px ${this.size}px`;
    elem.style.backgroundImage = `url(${this.cursor})`;
  },

  addCursorStyle: function (elem: HTMLDivElement) {
    elem.style.mixBlendMode = 'normal';
    elem.style.pointerEvents = 'none';
    elem.style.position = 'absolute';
    elem.style.top = '50%';
    elem.style.left = '50%';
    elem.style.opacity = '0';
    elem.style.position = 'fixed';
    elem.style.transform = 'translate(-50%, -50%)';
    elem.style.transition =
      'opacity 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out';
  },

  setupEventListeners: function () {
    const self = this as typeof cursor;

    document.querySelectorAll('a').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      el.addEventListener('mouseout', function () {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });
    });

    document.addEventListener('mousedown', function () {
      self.cursorEnlarged = true;
      self.toggleCursorSize();
    });
    document.addEventListener('mouseup', function () {
      self.cursorEnlarged = false;
      self.toggleCursorSize();
    });

    document.addEventListener('mousemove', function (e) {
      self.cursorVisible = true;
      self.toggleCursorVisibility();

      self.endX = e.clientX + self.size / 2;
      self.endY = e.clientY + self.size / 2;

      if (self.$dot) {
        self.$dot.style.top = self.endY + 'px';
        self.$dot.style.left = self.endX + 'px';
      }
    });

    document.addEventListener('mouseenter', function () {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      if (self.$dot) {
        self.$dot.style.opacity = '1';
      }
      if (self.$outline) {
        self.$outline.style.opacity = '1';
      }
    });

    document.addEventListener('mouseleave', function () {
      self.cursorVisible = true;
      self.toggleCursorVisibility();
      if (self.$dot) {
        self.$dot.style.opacity = '0';
      }
      if (self.$outline) {
        self.$outline.style.opacity = '0';
      }
    });
  },

  animateDotOutline: function () {
    const self = this as typeof cursor;

    self._x += (self.endX - self._x) / self.delay;
    self._y += (self.endY - self._y) / self.delay;

    if (self.$outline) {
      self.$outline.style.top = self._y + 'px';
      self.$outline.style.left = self._x + 'px';
    }

    requestAnimationFrame(this.animateDotOutline.bind(self));
  },

  toggleCursorSize: function () {
    const self = this as typeof cursor;

    if (self.cursorEnlarged && self.$dot) {
      self.$dot.style.backgroundImage = `url(${this.cursorPointer})`;
    } else if (self.$dot) {
      self.$dot.style.backgroundImage = `url(${this.cursor})`;
    }
  },

  toggleCursorVisibility: function () {
    const self = this as typeof cursor;

    if (self.cursorVisible && self.$dot && self.$outline) {
      self.$dot.style.opacity = '1';
      self.$outline.style.opacity = ' 1';
    } else if (self.$dot && self.$outline) {
      self.$dot.style.opacity = '0';
      self.$outline.style.opacity = '0';
    }
  },
};
