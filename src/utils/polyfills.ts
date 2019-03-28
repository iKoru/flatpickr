if (typeof Object.assign !== "function") {
  Object.assign = function(
    target: Record<string, any>,
    ...args: Record<string, any>[]
  ) {
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    for (const source of args) {
      if (source) {
        for(var key in source){ target[key] = source[key]}
      }
    }
    return target;
  };
}
