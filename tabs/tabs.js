const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]')); //converting NodeList to an Array

function handleTabClick(e){
  //hide all tab panels
  tabPanels.forEach(panel => panel.hidden = true);
  //mark all tabs as unselected
  tabButtons.forEach(tab => tab.setAttribute('aria-selected', false));
  //mark the clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  //find the associated tabPabel and show it
  const { id } = e.currentTarget;

  /*
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

 const tabPanel = tabPanels.find(panel => panel.getAttribute('aria-labelledby') === id);
 tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));