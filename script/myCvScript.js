var AlbertoLazzarinCV;
if (!AlbertoLazzarinCV) {
	AlbertoLazzarinCV = {};
}

// ************************
// UTILITY FUNCTIONS SETUP
// ************************

if (!AlbertoLazzarinCV.myFunctions) {
	
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
			_hideElelementById("programmingSkills" + _compSkillsPanelSuffix);
			_hideElelementById("webDesignSkills" + _compSkillsPanelSuffix);
			_hideElelementById("dbmsSkills" + _compSkillsPanelSuffix);
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
				_showElelementById(
					selectedComponent.getAttribute("data-zalbycv-section-to-open") + _compSkillsPanelSuffix);
				
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


// ************************
// PAGE COMPONENTS SETUP
// ************************

if (!AlbertoLazzarinCV.pageSetup) {
	
	//IIFE pattern
	AlbertoLazzarinCV.pageSetup = function () {
		
		let _hideComponents = function() {
			
			let componentsToBeHidden = document.getElementsByClassName("startHidden");
			for (let j = 0; j < componentsToBeHidden.length; j++) {
				componentsToBeHidden[j].setAttribute("hidden", "true");
			}
		}
		
		_hideComponents();
		
		console.log("Setup complete");
		
	};//endof defining function
}

AlbertoLazzarinCV.pageSetup();