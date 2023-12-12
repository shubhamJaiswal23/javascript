function person() {
  const firstName = 'John';
  function name() {
    const lastName = 'Doe';
    console.log(`${firstName} ${lastName}`);
  }
  name();
}

person();
