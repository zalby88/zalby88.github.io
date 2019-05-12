var AlbertoLazzarinCV;
if (AlbertoLazzarinCV == null) {
	AlbertoLazzarinCV = {};
}

// ************************
// UTILITY FUNCTIONS SETUP
// ************************

if (AlbertoLazzarinCV.myFunctions == null) {
	
	//IIFE pattern
	AlbertoLazzarinCV.myFunctions = (function () {
		
		//**************
		//Private Fields
		//**************
		let _compSkillsPanelSuffix = "_panel";
		
		let _showElelementById = function(elementId) { 
			document.getElementById(elementId).setAttribute('hidden', false);
		};
		
		let _hideElelementById = function(elementId) {
			document.getElementById(elementId).setAttribute('hidden', true);
		};
		
		
		//Computer Skills private functions
		let _hideComSkillsPanels = function() {
			document.getElementById("programmingSkills" + _compSkillsPanelSuffix).setAttribute('hidden', true);
			document.getElementById("webDesignSkills" + _compSkillsPanelSuffix).setAttribute('hidden', true);
			document.getElementById("dbmsSkills" + _compSkillsPanelSuffix).setAttribute('hidden', true);
		};
		
		//**************
		//Exposed Fields
		//**************
		return {
			showHideAccordion: function (componentId) {
				let isHidden = document.getElementById(componentId).getAttribute('hidden');
				if (isHidden === "true") {
					_showElelementById(componentId);
				} else {
					_hideElelementById(componentId);
				}
			} , 
			
			selectCompSkillsButton: function (selectedComponent) {
				
				//Close all the sections
				_hideComSkillsPanels();
				
				//Open the corresponding section
				let comSkillPanelToOpen = 
					selectedComponent.getAttribute("data-zalbycv-section-to-open") + _compSkillsPanelSuffix;
		
				_showElelementById(comSkillPanelToOpen);
				
				//Select only the button clicked
				let elemParent = document.getElementById("computerSkillsBox");
				let childrenButtons = elemParent.getElementsByClassName('button');
				for (let j = 0; j < childrenButtons.length; j++) {
					if (childrenButtons[j] != selectedComponent) {
						childrenButtons[j].className = 'button';
					} else {
						childrenButtons[j].className = 'button selected';
					}
					
				}
			}
		}//endof returning public objects
		
	})();//endof defining function
}