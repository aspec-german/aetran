var vt;

window.onload = function () {
  var container = document.getElementById("container");
  var msg = document.getElementById("msg");
  vt = new VTree(container);
  var reader = new VTree.reader.Object();

  function fileToText(file, callback) {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      callback(reader.result);
    };
  }

  function updateTree() {

    // Best practice totally
    var s =`[{



      "Sexuell":
        [{
          "Orientiert nach Gender": "affinitive Orientierung",
          "affinitive Orientierung":
            [{
              "Ich spüre immer Anziehung": "Allosexuell",
              "Ich spüre manchmal Anziehung":"Graubereich"
            }],
          "Orientiert nach Körpermerkmalen": "Körpererkmale",
          "Körpererkmale":
            [{
              "Haare":"Haare lol"
            }],
          "Amative Orientierung Groß": "amative Orientierung",
          "amative Orientierung":
          [{
              "Ich spüre immer Anziehung": "Allosexuell",
              "Ich spüre manchmal Anziehung":"Graubereich",
              "Ich spüre keine Anziehung": "Asexuell",
              "Graubereich": 
                [{
                  "Ich spüre erst dann Anziehung, wenn ich bereits eine Bindung mit der Person eingegangen bin.": "Demisexuell",
                  "test": "try2"
                }]            
          }]

        }] ,
      "arospec":
        [
          {
            "test":
              [
                "Graubereich",
                "cde"
              ]
          }
        ] ,
      "Sexueller Natur": "Sexuell",
      "Romantisch": "arospec"

      }]` 

    //var s = fileToText(inhalt.json)
    //var s = document.getElementById("from-text").value;


    msg.innerHTML = '';

    try {
      var jsonData = JSON.parse(s);
    } catch (e) {
      msg.innerHTML = 'JSON parse error: ' + e.message;
    }

    var data = reader.read(jsonData);

    vt.data(data)
      .update();
  }



  updateTree();
};