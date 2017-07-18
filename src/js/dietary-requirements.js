(function () {
    function updateRequirement(requirementsObj, requirement) {
        var notYetARequirement = !(requirement in requirementsObj);
        if (notYetARequirement) {
            requirementsObj[requirement] = { total: 0 };
        }
        requirementsObj[requirement].total++;
    }

    function sortDietaryRequirements(requirements) {
        function buildRequirementsObject(requirementsObj, cur) {
            updateRequirement(requirementsObj, cur);
            requirementsObj.total++;
            return requirementsObj;
        }

        var initialSizesObject = { total: 0 };
        return requirements.reduce(buildRequirementsObject, initialSizesObject);
    }

    if ('undefined' != typeof module && module.exports) {
        module.exports = sortDietaryRequirements;
    } else {
        // when loaded in the browser
        window.sortDietaryRequirements = sortDietaryRequirements;
    }
})();
