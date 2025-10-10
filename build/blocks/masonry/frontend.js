/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./blocks/masonry/frontend.js ***!
  \************************************/
class MasonryLayout {
  constructor(container) {
    this.container = container;
    this.grid = container.querySelector('.maw-masonry__grid');
    this.items = null;
    this.columns = parseInt(container.dataset.columns) || 3;
    this.columnsMobile = parseInt(container.dataset.columnsMobile) || 1;
    this.columnsTablet = parseInt(container.dataset.columnsTablet) || 2;
    this.gap = parseInt(container.dataset.gap) || 20;
    this.gapMobile = parseInt(container.dataset.gapMobile) || 15;
    this.gapTablet = parseInt(container.dataset.gapTablet) || 18;
    this.columnHeights = [];
    this.resizeTimeout = null;
    this.init();
  }
  init() {
    this.layout();
    window.addEventListener('resize', () => {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = setTimeout(() => this.layout(), 150);
    });
    if (window.MutationObserver) {
      const observer = new MutationObserver(() => {
        this.layout();
      });
      observer.observe(this.grid, {
        childList: true,
        subtree: true
      });
    }
    const images = this.grid.querySelectorAll('img');
    let loadedImages = 0;
    const totalImages = images.length;
    if (totalImages === 0) {
      return;
    }
    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
        if (loadedImages === totalImages) {
          this.layout();
        }
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            this.layout();
          }
        });
      }
    });
  }
  getCurrentColumns() {
    const width = window.innerWidth;
    if (width < 768) {
      return this.columnsMobile;
    } else if (width < 1024) {
      return this.columnsTablet;
    }
    return this.columns;
  }
  getCurrentGap() {
    const width = window.innerWidth;
    if (width < 768) {
      return this.gapMobile;
    } else if (width < 1024) {
      return this.gapTablet;
    }
    return this.gap;
  }
  layout() {
    this.items = Array.from(this.grid.children);
    if (this.items.length === 0) {
      return;
    }
    const currentColumns = this.getCurrentColumns();
    const currentGap = this.getCurrentGap();
    const containerWidth = this.grid.offsetWidth;
    const columnWidth = (containerWidth - currentGap * (currentColumns - 1)) / currentColumns;
    this.grid.style.position = 'relative';
    this.columnHeights = new Array(currentColumns).fill(0);
    this.items.forEach((item, index) => {
      const shortestColumn = this.columnHeights.indexOf(Math.min(...this.columnHeights));
      const xPos = shortestColumn * (columnWidth + currentGap);
      const yPos = this.columnHeights[shortestColumn];
      item.style.position = 'absolute';
      item.style.width = `${columnWidth}px`;
      item.style.left = `${xPos}px`;
      item.style.top = `${yPos}px`;
      item.style.transition = 'all 0.3s ease';
      const itemHeight = item.offsetHeight;
      this.columnHeights[shortestColumn] += itemHeight + currentGap;
    });
    const maxHeight = Math.max(...this.columnHeights);
    this.grid.style.height = `${maxHeight}px`;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const masonryContainers = document.querySelectorAll('.maw-masonry');
  masonryContainers.forEach(container => {
    new MasonryLayout(container);
  });
});
/******/ })()
;
//# sourceMappingURL=frontend.js.map