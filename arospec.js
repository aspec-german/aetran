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

    // Best practische totally
    var s =`[{
      "Romantisch":"Romantische Anziehung",
      "Romantische Anziehung":
        [{
          "Normative Anziehung":"Alloromantisch",
          "Sehr starke Anziehung":"Hyperromantisch",
          "Keine Anziehung":"Aromantisch",
          "Anziehungsstärke variiert":"Aroflux",
          "Anziehungsstärkenspitzen":"Arospitze",
          "Undefiniert":"Qouiromantisch",
          "Uninteressant":"Qouiromantisch",
          "Unbedeutend":"Qouiromantisch",
          "Keine Unterscheidbarkeit":"Platoniromantisch",
          "Platoniromantisch aufgr. ND":"Nebularomantisch",
          "Aromantisches Spektrum":"arospec",
          "arospec":
          [{
              "Umbrella Term":"Aromantisch",
              "Kein Passendes Label":"Alicoromantisch",
              "Graubereich":"Greyromantisch",
              "Greyromantisch":
              [{
                  "Vorraussetzungen":"Bedingungen",
                  "Bedingungen":
                  [{
                    "Mentale Anziehung":"Encephaloromantisch",
                    "Emotionales Band":"Demiromantisch",
                    "Keine tiefe Verbindung":"Frayromantisch",
                    "r. Anziehung d.a. Person":"Reciproromantisch",
                    "keine r. Anziehung d.a. Person":"Akoiromantisch"
                  }]
              }],
              "Wunsch nach romantischer Interaktion":"Cupioromantisch"
          }]      
        }],
      "Romantische Interaktion":
      [{
        "Ohne Anziehung":"o. Anziehung...",
        "o. Anziehung...":
        [{
        "Wunsch nach romantischer Interaktion":"Cupioromantisch"
        }],
        "Positiv ggü romantischer Interaktion":"Romance Favourable"
      }],
      "Abstraktionsebene0":"Abstraktionsebene",
      "Abstraktionsebene":
      [{
        "Fiktive Charakteren":"Fiktoromantisch"
      }],
        "Mentale Anziehung":"Mental Attraction...",
        "Mental Attraction...":
      [{
        "Gleiche Wellenlänge":"Neotisch"
      }]
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