funcion Person() {}

Person.prototype.eat = function() {
	return "I'm eating...."
}

Person.prototype.sleep = function() {
	return "I'm sleeping...."
}

var juanma = new Person();

juanma.eat() // "I'm eating...."
juanma.sleep() // "I'm sleeping...."

juanma.teach = function() {
	return "I'm teaching..."
}

juanma.teach();

juanma.sleep = function() {
	return "I don't sleep... I only teach..."
}

juanma.sleep();  // "I don't sleep... I only teach..."

// -------------------------

var PersonProto = {
	eat() {
		return "I'm eating...."
	},
	sleep() {
		return "I'm sleeping...."
	}
}

var juanma = {
	__proto__: PersonProto,
	teach() {
		return "I'm teaching..."
	},
	sleep() {
   // Super calls
   return "When i don't teach... " + super.sleep(); // "When i don't teach... I'm sleeping...."
  },
}
