(function() {
    function masonryLayout() {
      const masonryContainer = document.querySelector(".feed-container__inner");
      if (!masonryContainer) {
        return;
      }
    
      let masonryContainerStyle = getComputedStyle(masonryContainer);
      const columnGap = parseInt(
        masonryContainerStyle.getPropertyValue("column-gap")
      );
      const autoRows = parseInt(
        masonryContainerStyle.getPropertyValue("grid-auto-rows")
      );
    
      document.querySelectorAll(".feed-container__item").forEach((elt) => {
        const cardBox = elt.querySelector(".card-box");
        if (cardBox) {
          elt.style.gridRowEnd = `span ${Math.ceil(
            cardBox.scrollHeight / autoRows + columnGap / autoRows
          )}`;
        }
      });
    }
    
    masonryLayout();
    window.addEventListener("resize", masonryLayout);
  })();