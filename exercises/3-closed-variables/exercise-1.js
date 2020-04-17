const usesParentVariable = (param) => {
 parentScopeVariable2 = "local";
 return param + parentScopeVariable + parentScopeVariable2;

  // write me!
};

let parentScopeVariable = "parentScope";

const result1 = usesParentVariable("arg");
console.assert(result1 === "argparentScopelocal", "assert 1");

const result2 = usesParentVariable(undefined);
console.assert(result2 === "undefinedparentScopelocal", "assert 2");

parentScopeVariable = usesParentVariable("spoon");
console.assert(parentScopeVariable === "spoonparentScopelocal", "assert 3");

const result3 = usesParentVariable("");
console.assert(result3 === "spoonparentScopelocallocal", "assert 4");

parentScopeVariable = usesParentVariable("spoon");
console.assert(parentScopeVariable === "spoonspoonparentScopelocal", "assert 5");
