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
      "Umbrella Terms":
      [{
        "Alle GRSM-Personen":"Gay"
      }],



      "Sexuell":
        [{
          "Orientiert nach Pronomen":"Pronounsexual",
          "Pronounsexual":
          [{
          	"Umbrella Term":"Pronounsexual",
          	"zu he/him":"Hesexuell",
          	"zu it":"Itsexual",
            "zu Neopronomen":"Neosexuell"
          }],
          "Orientiert nach Gender": "affinitive Orientierung",
          "affinitive Orientierung":
            [{
              "Abhängig vom eigenem Gender": "juvelic",
              "juvelic":
              [{
              	"Zum eigenem Gender":"Homosexuell, Amberian, Gay",
              	"Präferenz zum eigenem Gender #1":"Cupiogex, Homoflexible",
              	"Präferenz zum eigenem Gender #2":"Anisosexual",
              	"Präf. zum ggü. liegendem Gender #1":"Cupiohex, Homocurious",
              	"Präf. zum ggü. liegendem Gender #2":"Hétere",
              	"Zum gegenüberliegendem Gender":"Enanteic, Heterosexuell",
                "Zur eigenem Sexualität":"GaySexual, Mutusexual",
              	"Männlich smushed":"Männlich smushed...",
              	"Männlich smushed...":
              	[{
              		"... u.a. männlich":"Achillean, Schwul",
              		"Mann smushed nur Männer":"Schwul",
	              	"... u.a. männlich & enby":"Asterosian, Schwul",     
	              	"... weiblich und enby":"Litian",
	              	"... u.a. enby":"Astroidian, Nibitic",
	              	"... männlich, weiblich, enby":"Marblic",
	              	"Mann smushed u.a. Frauen":"Duaric",
	              	"M-Spec, wechselnd Präf.":"Liberosexual",
              		"Weitere Begriffe":"Androcupiosappho"
              	}],
              	"Weiblich smushed":"Weiblich smushed...",
              	"Weiblich smushed...":
              	[{
	              	"... u.a. weiblich":"Agatic, Lesbisch, Sapphic",
	              	"... u.a. männlich":"Julietian",
	              	"Frau smushed nur Frauen":"Lesbisch, Feminosexual",
	              	"... Frauen":"Femaric, Lesbisch",
	              	"... weiblich & enby":"Amethystian, Lesbisch, Sapphic",         
	              	"... u.a. enby":"Asterian, Nibitic",
	              	"Frau smushed Enby und Männer":"Citrinian",
	              	"Frau smushed u.a. Männer":"Duaric",
	              	"... alle":"Luminian"
              	}],
              	"Enby smushed":"Enby smushed...",
              	"Enby smushed...":
              	[{
	              	"... Enby #1":"Aliamoric, Terrarian",
                  "... Enby #2":"Contraic, Gai, Hecatolic",
	              	"... u.a. Enby":"Enbian, Heliodoran",
	              	"... Enby und Männer":"Schwul, Marsic, Enbitor",
	              	"... u.a. Enby und Männer":"Carnelian, Gaibien, Heliodoran",
	              	"... Enby und Frauen":"Brownitian, Lesbisch, Venusic",
	              	"... Enby und Frauen #2":"Enbitrix, Gaybian, Iridian",
	              	"... Enby und stellarian":"Terrarian",
	              	"... smushed Enby und genderqueer":"Ceteramoric",
	              	"... männlich und solarian":"Marsic",
	              	"... weiblich und lunarian":"Venusic",
	              	"... Frauen":"Femaric, Feminamoric",
                  "... u.a. Binär":"Nibitic",
	              	"... alle":"Diamoric, Luminian"
              	}],
              	"Abinär enby smushed":"Abinär enby smushed...",
              	"Abinär enby smushed...":
              	[{
              		"... Frauen":"Donnasexuell"
              	}],
              	"1 Agender smushed":"1 Agender smushed...",
              	"Agenamoric":
              	[{
              		"Umbrella Term":"Agenamoric",
	              	"1 Agender orientert sich":"Agenamoric",
	              	"... u.a. Enbys":"Agenidian, Wisterian",
	              	"... u.a. männlich":"Agenilian, Thistlian, Fenosexuell",
	              	"... männlich und enby":"Lilacian",
	              	"... nur männlich":"Yaesexuell",
	              	"... M-Spec":"Agenipian",
	              	"... u.a. weiblich":"Agenirian, Azalian, Iliosexual",
                  "... u.a. binär":"Orchidian",
	              	"... nur Frauen":"Naneosexuell",
	              	"... u.a. xenic":"Agenixian",
	              	"... Agender":"Gaesexuell, Delphinian",
	              	"... Agender und enby":"Magnolian",
	              	"... alle":"Dahlian"
              	}],
              	"1 Anonbinary smushed":"Anonbinary smushed...",
              	"Anonbinary smushed...":
              	[{
	              	"... nur Agender":"Argelinne",
	              	"... nur Anonbinary":"Cypraette",
	              	"... nur Männer":"Erwekinne",
                  "... nur Neutrois":"Netranale",
	              	"... Frauen, Enby und Anonbinary":"Hyscenare",
	              	"... Frauen und Neutrois":"Leramuzze",
                  "... non-aligned Enby und Binäre":"Ondoninne",
	              	"Weitere Begriffe:":"Artudette"
              	}],
	              	"Genderfluid smushed":"Genderfluid smushed...",
	              	"Genderfluid smushed...":
              	[{
              		"... weiblich":"Auriora, Lunsynian",
              		"... enby":"Hecatolic, Kyanitian, Lapian",
              		"... weiblich und enby":"Iridian",
              		"... männlich und enby":"Labradorian",
              		"... gegenüberliegendem":"Juleric, Omnistraight",
                  "... zum eigenem Gender":"Omnique",
                  "Sexualität wechselt mit Gender":"Novosexuell, Omnistraight",
              		"Weitere Begriffe #1":"Demetersexual, Hauynitian",
              		"Weitere Begriffe #2":"Lahurian, Lahuric, Lapisian",
              		"Weitere Begriffe #3":"Marsexuell, Mesque"
              	}],
              	"Genderqueer smushed":"Genderqueer smushed...",
              	"Genderqueer smushed...":
              	[{
              		"... Enby und genderqueer":"Ceteramoric, Galaxsexual",
              		"... männlich und enby":"Heliodoran",
              		"... Frauen":"Feminamoric"
              	}],
              	"Nicht-Erdisch smushed":"Nicht-Erdisch smushed...",
              	"Nicht-Erdisch smushed...":
              	[{
              		"... Nicht-Erdisch":"Lurric"
              	}],
              	"Binär zu Binär, egal wie":"Binian",
              	"Mehrere bestimmte Gender zu":"Mehrere bestimmte Gender zu...",
              	"Mehrere bestimmte Gender zu...":
              	[{
              		"... einem bestimmtem Gender":"zu bestimmte Gender",
              		"zu bestimmte Gender":
              		[{
		              	"... smushed Männer":"Azurian, Diamondian",
		              	"... smushed Frauen":"Larimarian, Morganitian",
		              	"... smushed weiblich":"Lunsynian",
		              	"... smushed Enby":"Hecatolic, Kyanitian, Mersynian",
		              	"... smushed Männer und Enby":"Labradorian",
		              	"... smushed das eigene Gender":"Cinnabaric",
		              	"... zum gegenüberliegendem":"Juleric",
		              	"... smushed alles":"Luminian, Mesque"
              		}],
              		"... zu mehreren Gender":"zu mehreren Gender",
              		"zu mehreren Gender":
              		[{
		              	"... smushed M-Spec binär":"Anfisian, Aurian",
                    "... smushed Enby und Männer #1":"Aventurian, Floric, Heliodoran",
                    "... smushed Enby und Männer #2":"Opalian",
		              	"... smushed Enby und Frauen":"Axinitian, Benitoitic, Iolitian",
		              	"... smushed Männer und Frauen":"Callistian",
		                "... smushed Männer":"Fluorian",
		              	"... zum gegenüberliegendem":"Juleric",
		                "Weitere Begriffe":"Hauynitian, Lapisian, Mesque"

	           	   }],
              		"... zu vielen Gender":"zu vielen Gender",
              		"zu vielen Gender":
              		[{
		              			
              		}],
              		"... unbestimmt vielen Gender":"unbestimmt",
              		"unbestimmt":
              		[{
						"Nicht-Mann smushed Nicht-Mann":"Daunic",
			            "Nicht-Straight":"Courpalian, Queer",
			            "Weitere Begriffe":"Alexandritic, Courscatian" 	
              		}],
              		"Weitere Begriffe":"Lahurian, Lahuric, Lapisian"   
              	}],

		        "Anziehungen innerhalb von Systemen":"Mutolic",
		        "Mutolic":
		        [{
		        	"Von Frau zu":"Von Frau zu...",
		        	"Von Frau zu...":
		        	[{
		        		"... zu Frau":"Saputolic",
		        		"... zu Mann":"Ergatolic",
		        		"... zu Enby":"Finbatolic",
		        		"... zu Agender":"Fernatolic",
		        		"... zu Xenogender":"Xebatolic"
		        	}],
		        	"Von Mann zu":"Von Mann zu...",
		        	"Von Mann zu...":
		        	[{
		        		"... zu Frau":"Achutolic",
		        		"... zu Mann":"Ergotolic",
		        		"... zu Enby":"Virbatolic",
		        		"... zu Agender":"Fernotolic",
		        		"... zu Xenogender":"Xebotolic"		        		
		        	}],
		        	"Von Enby zu":"Von Enby zu...",
		        	"Von Enby zu...":
		        	[{
		        		"... zu Frau":"Edvatolic",
		        		"... zu Mann":"Edvotolic",
		        		"... zu Enby":"Entolic",
		        		"... zu Agender":"Edvetolic",
		        		"... zu Xenogender":"Edvextolic"		        		
		        	}],
		        	"Von Agender zu":"Von Agender zu...",
		        	"Von Agender zu...":
		        	[{
		        		"... zu Frau":"Advatolic",
		        		"... zu Mann":"Advotolic",
		        		"... zu Enby":"Advetolic",
		        		"... zu Agender":"Agtolic",
		        		"... zu Xenogender":"Advixatolic"		        		
		        	}],
		        	"Von Xenogender zu":"Von Xenogender zu...",
		        	"Von Xenogender zu...":
		        	[{
		        		"... zu Frau":"Xitalic",
		        		"... zu Mann":"Xitolic",
		        		"... zu Enby":"Xitetolic",
		        		"... zu Agender":"Xinertolic",
		        		"... zu Xenogender":"Xentolic"		        		
		        	}]

		        }]
              }],
              "smushed M-Spec":"Novicesexuell",
              "unabhängig vom eigenem Gender":"non-juvelic",
              "non-juvelic":
              [{
              	"Zu mehreren Gender":"M-Spec smushed...",
              	"M-Spec smushed...":
              	[{
              		"Umbrella Term":"Multisexuell, Plurisexuell",
	              	"Unabhängig vom Gender":"Pansexuell, Ambivaic, Anthro",
	              	"Unabhängig vom Gender #2":"Blanesexual, Idesexual",
	              	"Zu allen Gender":"Omnisexuell, Ambivaic, Omniflux",
                  "Ggf. zu allen Gender":"Omnicurious",
	              	"Zu wechselnden Gender":"Flinic",
	              	"Genau 2 Gender":"Disexual",
	              	"Genau 6 Gender":"Hexsexual",
	              	"Mindestens 2 Gender #1":"Bisexuell, Erbisexuell",
	              	"Mindestens 2 Gender #2":"Seisexuell, Multisexual",
	              	"... beide binäre Gender":"Binsexual",
	              	"Vielleicht mindestens 2 Gender":"Bicurious, Biflexible, Biflux",
	              	"Zu vielen, aber nicht allen Gender":"Polysexual",
	              	"Nicht das eigene Gender":"Differosexual",
	              	"... zu neutrale Gender":"Ainic, Neusexuell",
                  "... keine binären Gender":"Noboric",
                  "... nur keine Cis-Males":"Nocismasexuell",
                  "... nur keine Cis-Females":"Nociswomasexuell",
                  "... nur keine Cis-Gender":"Nocissexuell",
              		"... u.a. Agender-Menschen":"Ageninic",
              		"... nur neutrale Gender":"Neusexuell",
                  "... primär enby":"Nonbic",
              		"... Weiblichkeit":"Finic",
              		"... Männlichkeit":"Minic, Minsexual",
              		"... Androgynität":"Linsexual",
              		"... Genderexpression":"Flixasexual, Flixisexual",
                	"... Genderkonformität":"GCsexuell",
                 	"... Gender-Nichtkonformität":"GNCsexual",
	              	"... Faunagender":"Anuafsexuell",
	              	"... u.a. nicht-Menschlich":"Medusan",
	              	"... Kingender":"Anuafsexuell",
	              	"... wechselnde Gender":"Aquian",
	              	"... Bigender":"Bigeninic",
	              	"Mindestens 2 Gender ohne Männer":"Binitor, Neptunic",
	              	"Mindestens 2 Gender ohne Frauen":"Binotrix",
                  "... primär nicht-weiblich":"Gynecurious, Nofinflexible",
                  "... nicht-weiblich":"Nofinsexuell",
                	"... primär nicht-männlich":"Lumibroussexual, Nominflexlible",
                  "... nicht-männlich":"Nominsexuell",
                  "... primär nicht-enby":"Noninflexible",
                  "... nicht-enby":"Noninsexuell",
                	"... primär hetero #1":"Heteroflexible, Elasexual",
                	"... primär hetero #2":"Homocurious",
              		"... u.a. Devilgender":"Devilsexual",
              		"... Personen mit mehreren Gender":"Multigenic",
                  "... Katzenmenschen":"Nekosexuell",
                  "... keine Frauen":"Nofemaric, Nowomasexuell",
                  "... keine Männer":"Nomascic, Nomasexuell",
	              	"Weitere Begriffe #1":"Ambisexuell, Legeresexual",
	              	"Weitere Begriffe #2":"Lumibroussexual, Mercuric",
	              	"Weitere Begriffe #3":"Multiflexible"
              	}],
              	"Zu einem Gender":"Monosexuell smushed ...",
              	"Monosexuell smushed ...":
              	[{
              		"... männlich #1":"Mascic, Masexual, Muscusexual",
              		"... männlich #2":"Latamascusexual, Solariasexual",
              		"... vielleicht männlich":"Androcurios",
              		"... u.a. männlich":"Mascusexual",
              		"... u.a. Männer":"Minkalosfem",
              		"... hauptsächlich männlich":"Androflexible, Minflexible",
              		"... ausschließlich männlich":"Androgynosexuell, Minkalosfem",
              		"... ausschließlich Männer":"Androsexuell",
              		"... männliche Männer":"Minmasexual",
              		"... männliche Frauen":"Minwomasexual",
              		"... androgyne Männer":"Linmasexual",
              		"... weibliche Männer":"Finmasexuell",
              		"... weibliche Männer und Enby":"Finuranic",
              		"... genderfluid strayt girls":"Aphrodisexual",
              		"... hauptsächlich Enby":"Ceteroflexible, Ninflexible, Ninic",
                  "... genderneutral":"Ninsexuell",
              		"... nur Enby oder genderqueer":"Ceterosexuell",
              		"... u.a. Enby":"Enboric, Feminaesexual",
              		"... weibliche Enbys":"Lunaric",
              		"... u.a. weiblich #1":"Femaric, Feminaesexuell",
              		"... u.a. weiblich #2":"Femmesexuell, Finsexuell",
              		"... u.a. weiblich #3":"Finflexible, Gyneflexible",
              		"... ausschließlich weiblich":"Finwomasexual, Gynesexual",
              		"... ausschließlich Frauen":"Femkalosmin, Gynesexual",
              		"... u.a. Frauen":"Femkalosmin",
              		"... u.a. Agender":"Firasexual",
                  "... u.a. Anonbinary":"Nogarian",
              		"... sich selbst":"Autosexuell"
              	}],
              	"Mindestens eine Orientierung":"Amplusic",
              	"Die Eigenaziehung variiert":"Autoflux",
                "Smushed nicht sich selbst":"Ectosexual",
              	"Ausnahme für 1 bestimmte Person":"Boreasexuell",
	              "Die Anziehung variiert" :"Variable Anziehung",
	              "Variable Anziehung":
	              [{
	              "Musik beeinflusst Sexualität":"Cadensexuell",
	              "Gefühle beeinflussen Sexualität":"Demovsexual"

	              }],
	            "Smushed binäre Gender":"Binaric, Boric"
              }]
            }],
          "Orientiert nach Merkmalen": "Individuelle Merkmale",
          "Individuelle Merkmale":
            [{
              "Haare":"Ja wie nennt sich das?",
              "Augen":"Ja wie nennt sich das?",
              "Kultur":"Bloodsexuell",
              "Intelligenz":"Sapiosexuell",
              "Identische Neurodiversität":"Feathalike",
              "Unabhängig von Körpermerkmalen":"Idesexual",
              "U. von sexuellen Körpermerkmalen":"Idisexual",
              "Katzenmenschen":"Nekosexuell",
              "Untere Körperhälfte":"Lekanisexuell"
            }],
          "Amative Orientierung": "amative Orientierung",
          "amative Orientierung":
          [{
              "Vorhandensein von Anziehung": "Allosexuell, Zedsexuell, Comsexuell",
              "Konstante Intensität der Anziehung":"Diastimisexuell",
              "Konstante Orientierung":"Kymenic",
              "''Keine Orientierung''":"Orientationsless",
              "Sich abwechselnde Sexualität":"Duosexuell",
              "Weicht in Tagträumen ab":"Malasexual",
              "Kein Interesse an der Anziehung":"Apathsexuell",
	            "Andere Sexualität als erwünscht":"Buenosexuell",
              "Andere Orientierung bei Pornos":"Occosexuell",
              "Innere Hürde beim Ausleben":"Aporisexuell",
              "Eigene Orientierung ist unklar":"Questioning, Clypeussexual",
              "Eigene Orientierung ist unbeschreiblich":"Cryptosexual, Novisexuell",
              "Kein passendes Label":"Novisexuell",
              "Sexuell aktiv nur mit Anziehung":"Axiosexuell",
              "Stärke der Sexualität nicht beschreibbar":"Nebulasexuell",
              "Bedingte/keine/wenig Anziehung":"Asexual Spectrum",
              "Asexual Spectrum":
              [{
              "Umbrella Term": "Asexual Spectrum",
              "Umbrella Term": "Acespec",
              "Ich spüre nie Anziehung": "Asexuell",
              "Ich spüre teilweise Anziehung": "Graubereich",
              "Nur eine bestimmte Person":"Monasexual",
              "Graubereich": 
                [{
                  "Umbrella Term": "Greysexuell",
                  "Bedingungen": "Bedingte Sexualität",
                  "Bedingte Sexualität":
                  [{
                    "Bestehnde Bindung": "Demisexuell",
                    "Geistig Verbunden": "Noetisexuell",
	                  "Keine Bestehnde Bindung": "Freysexuell",
	                  "Zu unbekannten Personen":"Incognosexual",
	                  "Exklusiv zu online-Personen":"Internetsexual",
	                  "Die Person fühlt sich zu mir angezogen":"Reciprosexuell",
	                  "Konsum oder Geruch von Kaffee":"Coffeesexual",
	                  "Konsum oder Geruch von Kakao":"Hocosexual",
	                  "Konsum oder Geruch von Kaffee":"Leasexual",
	                  "Konsum oder Geruch von Dessert":"Dessexual",
	                  "Konsum oder Geruch von Mahlzeiten":"Measexual",
                    "Stereotypische Romantik":"Nickilosexuell",
                    "Im Eigentum dieser Person sein":"Omochasexuell",
	                  "Ansprechende Kommunikation und Gespräche":"Communicosexuell"
         	      }],
         	      "Zeitliche Veränderungen":"Zeitlich Variable Sexualität",
         	      "Zeitlich Variable Sexualität":
         	      [{
	                  "Variiernde Anziehungstärke": "Aceflux, Alloflux, Kymenic",
	                  "Anziehungsspitzen": "Acespike, Allospike",
	                  "Die Identität variiert":"Abrosexuell, *flexible, *flux",
	                  "Die Anziehung ist verschwunden":"Dwinsexual"
         	      }]
                }],
              "Ich weiß nicht, was zu mir passt":"Agnosexuell"
              }]         
          }],
          "sexuelle Präferenz": "sexuelle Präferenzen",
          "sexuelle Präferenzen":
          [{
          	"Kinks":"test",
          	"Bedingungen für Präferenzen":"Bedingungen",
          	"Bedingungen":
          	[{
          		"Je nach Gender unterschiedlich":"Chameleosexual"
          	}]
          }],
          "Gründe":"Kausale Sexualität",
          "Kausale Sexualität":
          [{
          	"Wunsch nach Kindern":"Kinderwunsch",
          	"Gegen Bezahlung":"Prostitution",
          	"Neugierde":"Neugierig",
          	"Lange Weile":"Laaange Weile",
          	"Künsterlischer Ausdruck":"Kunst"
          }],
          "Mit wie viel Menschen":"mono/poly-Dimension",
          "mono/poly-Dimension":
          [{
          	"Nur mit sich selbst":"Autosexuell",
          	"Maximal zu zweit":"Monoa",
          	"Auch mit 2+ Menschen":"Polya"
          }],
        "Metaebene":"Meta",
        "Meta":
	        [{
	        	"Gliederung in Ebenen":"Brickhillsexuell",
	        	"Zweifel an der eigenen Orientierung":"Implasexual, Inexsexual, Xumsexual",
	        	"Unsicherheit mit der Sexualität":"Incerta",
	        	"Noch nicht aufgedeckte Anziehung":"Innocentsexual",
	        	"Begriffe sammelnd":"Kiwihoarder",
	        	"Wechselnde Label":"Messexual",
	        	"Wechselnde Label, k. Orientierung":"Labelflux",
	        	"Zum:r Partner:in":"Lovesexual"
	        }],
        "Abstraktion":"Abstraktionsebene",
        "Abstraktionsebene":
        [{
          "Katzenmenschen":"Nekosexuell",
        	"Fiktive Charactere":"Fiktosexuell",
        	"Fiktosexuell":
        	[{
                "... aus Büchern":"Booklosexuell",
                "... aus Comics und Kartoons":"Cartosexual",
              "... aus Videospielen":"Gamosexual"      		
        	}],
        	"Keine Menschen und Tiere":"Exceptiosexual",
          "Fiktiv und menschlich":"Kaitasexual",
          "Auch mit 2+ Menschen":"Polya, nicht Monoa",
          "Mit Objekten":"Objectum",
          "Objectum":
          [{
            "Spielzeuge, Puppen, Statuen":"Agalmatum",
            "Fahrgeschäfte":"Amusrum",
            "Konzepte":"Conceptum",
            "Aufblasbares":"Inflateajectum",
            "Essen und Rezepte":"Onsum",
            "Flora":"Plantum",
            "Plüsch(Tiere)":"Plushum",
            "(Bett)Decken":"Qultim",
            "Selbsterstelltes":"Sculptum",
            "Möbel":"Turum",
            "Fahrzeuge und technische Geräte":"Vehium",
            "Natur":"Naturum",
            "Spezifische Objekte":"Multum"
          }]
	        }]
        }],
      "arospec":
        [{
            "test":
              [
                "Graubereich",
                "cde"
              ]
         }],
      "Sexueller Natur": "Sexuell",
      "Romantisch": "arospec",
      "Nicht Unterscheidbarkeiten":"Anziehungen nicht auseinanderhalten",
      "Anziehungen nicht auseinanderhalten":
      [{

        "Sexuell und Ästhetisch":"Callisexual"
      }],

      "Finanzieller Natur":"Finanziell",
      "Finanziell":
      [
      	"Monetuell"
      ]
      
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