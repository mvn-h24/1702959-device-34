function initTabs(){
  var tabs = function ()  {
    return document.querySelectorAll('.tabs-list__item');
  }
  var contentTabs = function () {
    return document.querySelectorAll('.tabs-list__tab-layout .service-summary');
  }
  var currTab = 'tabs-list__switch_current';
  var hiddenClass = 'hidden';
  tabs().forEach(function(tab, key) {
    tab.addEventListener('click', function (event) {
      tabs().forEach(function (tab) {
        tab.classList.remove(currTab)
      })
      if(event.target.tagName === 'BUTTON'){
        currentTab = event.target.parentElement;
      }else{
        currentTab = event.target;
      }
      currentTab.classList.add(currTab)
      contentTabs().forEach(function (contentTab){
        contentTab.classList.add(hiddenClass)
      })
      contentTabs().item(key).classList.remove(hiddenClass)
    })
  })
}
function main(){
  initTabs();
}
document.addEventListener("DOMContentLoaded", main);
