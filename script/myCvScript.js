var AlbertoLazzarinCV;
if (AlbertoLazzarinCV == null) {
	AlbertoLazzarinCV = {};
}

if (AlbertoLazzarinCV.myFunctions == null) {

	AlbertoLazzarinCV.myFunctions = {
	
		showHideAccordion: function (componentId) {
			var isHidden = document.getElementById(componentId).getAttribute('hidden');
			
			if (isHidden != null) {
				var isNowHidden = true;
				if (isHidden == "true") {
					isNowHidden = false;
				}
				document.getElementById(componentId).setAttribute('hidden', isNowHidden);
			}
		} , 
		
		selectComkSkillsButton: function (selectedComponent) {
			selectedComponent.className = 'button selected';
			var sectionToOpen = selectedComponent.getAttribute("sectionToOpen");
			
			//Open the corresponding section and close the others
			document.getElementById("programmingSkillsPanel").setAttribute('hidden', true);
			document.getElementById("webDesignSkillsPanel").setAttribute('hidden', true);
			document.getElementById("dbmsSkillsPanel").setAttribute('hidden', true);
			if (sectionToOpen == 'programmingSkills') {
				
				document.getElementById("programmingSkillsPanel").setAttribute('hidden', false);
				
			} else if (sectionToOpen == 'webDesignSkills') {
				
				document.getElementById("webDesignSkillsPanel").setAttribute('hidden', false);
				
			} else if (sectionToOpen == 'dbmsSkills') {
				
				document.getElementById("dbmsSkillsPanel").setAttribute('hidden', false);
			}
			
			//Deselect the other buttons
			var elemParent = selectedComponent.parentNode.parentNode.parentNode; //I want to reach "table" element
			var childrenButtons = elemParent.getElementsByClassName('button');
			for (var j = 0; j < childrenButtons.length; j++) {
				if (childrenButtons[j] != selectedComponent) {
					childrenButtons[j].className = 'button';
				}
				
			}
		}

	};
}