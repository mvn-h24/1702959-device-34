function initTabs(){
  const getTabs = function ()  {
    return document.querySelectorAll('.tabs-list__item');
  }
  const getTabsContent = function () {
    return document.querySelectorAll('.tabs-list__tab-layout .service-summary');
  }
  const currTab = 'tabs-list__switch_current';
  const hiddenClass = 'hidden';
  getTabs().forEach(function(tab, key) {
    tab.addEventListener('click', function (event) {
      getTabs().forEach(function (tab) {
        tab.classList.remove(currTab)
      })
      let currentTab;
      if(event.target.tagName === 'BUTTON'){
        currentTab = event.target.parentElement;
      }else{
        currentTab = event.target;
      }
      currentTab.classList.add(currTab)
      getTabsContent().forEach(function (contentTab){
        contentTab.classList.add(hiddenClass)
      })
      getTabsContent().item(key).classList.remove(hiddenClass)
    })
  })
}
function main(){
  initTabs();
}
document.addEventListener("DOMContentLoaded", main);
