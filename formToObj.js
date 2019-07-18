/*
Give Html Form:

<form id="foo-bar-baz-qux">
  <input type="text" name="a.b" />
  <input type="text" name="a.c.d" />
  <input type="text" name="e" />
</form>

The function should return the following result in javascript console:

{
  "a": {
    "b": "",
    "c": {
      "d": ""
    }
  },
  "e": ""
}


Make a function which would take “id” as an argument of a form and return the result like above.
*/

function formToObj(id, obj = {}) {
	let form = docuemnt.getElementById(id);

	[...form.children].forEach(child => {
		let names = child.name.split('.');

		let key = obj;
		names.forEach((item, index) => {
			if (key[item] === undefined) {
				if (names.length - 1 === index) {
					key[item] = "";
				} else {
					key[item] = {};
				}
			}

			key = key[item];
		})

		console.log(obj)
	});

}

formToObj(`foo-bar-baz-qux`);
