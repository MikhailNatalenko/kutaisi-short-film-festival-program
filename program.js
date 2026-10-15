/* Kutaisi International Short Film Festival — programme 16–22 October 2026.
   Parsed from Program_Final.pdf. Titles are the English lines in the PDF.
   Three films are printed only in Georgian; those English titles are translated
   and marked georgianOnly: true. */
window.PROGRAM = [
  {
    n: 1,
    date: "16.10",
    weekday: "Friday",
    slots: [
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 3",
            kicker: "Opening Ceremony",
            films: [
              { title: "Rezo", director: "Levan Gabriadze", year: "2018" }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 2,
    date: "17.10",
    weekday: "Saturday",
    slots: [
      {
        time: "11:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Rezo Gabriadze — 90",
            films: [
              { title: "Feola", director: "Baadur Tsuladze", year: "1970", runtime: "37′" },
              { title: "The Pitcher", director: "Irakli Kvirikadze", year: "1970", runtime: "25′" }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition"],
            films: [
              { title: "Class Photo", director: "Arnas Balčiūnas", country: "Lithuania", runtime: "17:12" },
              { title: "How to Listen to Fountains", director: "Eva Sajanová", country: "Slovakia", runtime: "10:07" },
              { title: "Strong as a Lion", director: "Nathan Villanneau", country: "France", runtime: "14:19" },
              { title: "From Countless Sleepless Nights", director: "Dea Tcholokava", country: "Georgia, Germany", runtime: "18:00" },
              { title: "The Last Summer of Ladybugs", director: "Levan Chkonia", country: "Georgia", runtime: "28:00" }
            ]
          }
        ]
      },
      {
        time: "12:00",
        halls: [
          {
            hall: "Hall 3",
            films: [
              { title: "City Noise", director: "Papuna Mosidze", year: "2025", runtime: "94′" }
            ]
          }
        ]
      },
      {
        time: "16:00",
        halls: [
          {
            hall: "Hall 1",
            films: [
              { title: "Public Lecture", director: "Dimitri Mamulia", event: true },
              { title: "Slow Cinema", director: "Dimitri Mamulia", event: true }
            ]
          }
        ]
      },
      {
        time: "17:00",
        halls: [
          {
            hall: "Hall 2",
            kicker: "Italian Cinema Classics: Labor, Time and Memory",
            films: [
              { title: "Being Woman", director: "Cecilia Mangini", year: "1965", runtime: "29′" },
              { title: "Sulfur Mines", director: "Vittorio De Seta", year: "1955", runtime: "10′" },
              { title: "Islands of Fire", director: "Vittorio De Seta", year: "1955", runtime: "9′" },
              { title: "The Pensioner", director: "Ermanno Olmi", year: "1958", runtime: "10′" },
              { title: "Towards Life", director: "Dino Risi", year: "1947", runtime: "12′" }
            ]
          }
        ]
      },
      {
        time: "18:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Hungarian New Wave",
            films: [
              { title: "You", director: "István Szabó", year: "1963", runtime: "11′" },
              { title: "Gypsies", director: "Sándor Sára", year: "1963", runtime: "19′" },
              { title: "Blow-Ball", director: "Márta Mészáros", year: "1965", runtime: "25′" },
              { title: "The Presence", director: "Miklós Jancsó", year: "1978", runtime: "12′" },
              { title: "Elegy", director: "Zoltán Huszárik", year: "1966", runtime: "19′" },
              { title: "Tisza: Autumn in Sketches", director: "István Gaál", year: "1963", runtime: "17′" }
            ]
          }
        ]
      },
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition", "Rescreening"],
            films: [
              { title: "Class Photo", director: "Arnas Balčiūnas", country: "Lithuania", runtime: "17:12" },
              { title: "How to Listen to Fountains", director: "Eva Sajanová", country: "Slovakia", runtime: "10:07" },
              { title: "Strong as a Lion", director: "Nathan Villanneau", country: "France", runtime: "14:19" },
              { title: "From Countless Sleepless Nights", director: "Dea Tcholokava", country: "Georgia, Germany", runtime: "18:00" },
              { title: "The Last Summer of Ladybugs", director: "Levan Chkonia", country: "Georgia", runtime: "28:00" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "Finale Allegro", director: "Emanuela Piovano", year: "2026", runtime: "113′" }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 3,
    date: "18.10",
    weekday: "Sunday",
    slots: [
      {
        time: "11:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Ukraine Through Children’s Lens",
            films: [
              { title: "How Do Birds See the Ground from the Sky?" },
              { title: "Friendship and the Hundred Dollar Bill" },
              { title: "Beauty" }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition"],
            films: [
              { title: "I Wanted to Hear Your Voice", director: "James Pellerito", country: "United States", runtime: "12:00" },
              { title: "The Barrier", director: "Christophe Deram", country: "France", runtime: "17:49" },
              { title: "The Menarche", director: "Xueyan Wang", country: "China, United Kingdom", runtime: "13:44" },
              { title: "Fanny at the Beach", director: "Raphaelle Petit Gille", country: "France", runtime: "35:00" },
              { title: "Final Scene", director: "Diego Kompel", country: "Argentina", runtime: "20:00" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Nana Mchedlidze — 100",
            films: [
              { title: "The First Swallow", director: "Nana Mchedlidze", year: "1975", runtime: "75′" }
            ]
          }
        ]
      },
      {
        time: "11:30",
        halls: [
          {
            hall: "Hall 1",
            kicker: "European Cine Tour",
            films: [
              { title: "Vault", director: "Péter Bergendy", year: "2018", runtime: "75′" }
            ]
          }
        ]
      },
      {
        time: "13:00",
        halls: [
          {
            hall: "Hall 3",
            kicker: "Reframing the Region: Women’s Voices and Representation — a selection of Armenian shorts",
            films: [
              { title: "Handstand", director: "Ovsanna Shekoyan", year: "2021", runtime: "15′" },
              { title: "Resonance", director: "Lucy Vartanian", year: "2025", runtime: "15′" },
              { title: "Dalila", director: "Ines Karapetyan", year: "2026", runtime: "16′" },
              { title: "Seagulls", director: "Lilit Movsisyan", year: "2024", runtime: "25′" },
              { title: "It Takes a Village", director: "Ophelia Harutyunyan", year: "2022", runtime: "23′" }
            ]
          }
        ]
      },
      {
        time: "14:30",
        halls: [
          {
            hall: "Hall 1",
            kicker: "The Newest Georgian Shorts",
            films: [
              { title: "House of Tengiz", director: "Marina Baibarza", country: "Georgia", year: "2026", runtime: "10:43" },
              { title: "Zedashe", director: "Giorgi Varsimashvili", country: "Georgia", year: "2026", runtime: "25′" },
              { title: "From 7 to 5", director: "Giorgi Parkosadze", country: "Belgium", year: "2026", runtime: "10:10" },
              { title: "The Shoe and the Bike Stories", director: "Levan Birkadze", country: "Georgia", runtime: "13:05" },
              { title: "Moment of Freedom", director: "Alexandre Koridze", country: "Georgia", year: "2026", runtime: "10:00" },
              { title: "Chiatura Is My Pride", director: "Anastasia Bakhturidze", country: "Georgia", year: "2026", runtime: "18:17" },
              { title: "Mountain, Hole", director: "Grigol Janashia", country: "Georgia", year: "2026", runtime: "23:30" },
              { title: "Bravo", director: "Nia Zhvania", country: "Georgia", year: "2026", runtime: "13:00" }
            ]
          }
        ]
      },
      {
        time: "16:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Panel Discussion",
            films: [
              {
                title: "Reframing the Region: Women’s Voices and Representation",
                event: true,
                detail: "Diana Martirosian, Botagoz Koilybayeva, Laura van Zuylen. Moderator: Lika Glurjidze."
              }
            ]
          }
        ]
      },
      {
        time: "17:00",
        halls: [
          {
            hall: "Hall 3",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "A Fire There", director: "Marlene Edoyan", country: "Canada", year: "2026", runtime: "95′" }
            ]
          }
        ]
      },
      {
        time: "18:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Georgian Premiere",
            tags: ["Premiere"],
            films: [
              { title: "Tear Gas", director: "Uta Beria", year: "2026", runtime: "96′" }
            ]
          }
        ]
      },
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition", "Rescreening"],
            films: [
              { title: "I Wanted to Hear Your Voice", director: "James Pellerito", country: "United States", runtime: "12:00" },
              { title: "The Barrier", director: "Christophe Deram", country: "France", runtime: "17:49" },
              { title: "The Menarche", director: "Xueyan Wang", country: "China, United Kingdom", runtime: "13:44" },
              { title: "Fanny at the Beach", director: "Raphaelle Petit Gille", country: "France", runtime: "35:00" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Georgian Premiere",
            tags: ["Premiere"],
            films: [
              { title: "Tear Gas", director: "Uta Beria", year: "2026", runtime: "96′" }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 4,
    date: "19.10",
    weekday: "Monday",
    slots: [
      {
        time: "11:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Levan Paatashvili — 100",
            films: [
              { title: "Other People’s Children", director: "Tengiz Abuladze", year: "1958", runtime: "80′" }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition"],
            films: [
              { title: "Letter from a Hitman", director: "Hleb Papou", country: "Italy", runtime: "13:40" },
              { title: "Rage", director: "Fran Moreno Blanco, Santi Pujol Amat", country: "Spain", runtime: "18:42" },
              { title: "The Mine", director: "Randa Maroufi", country: "France, Italy, Morocco, Qatar", runtime: "26:00" },
              { title: "Hidden in Frame", director: "Ana Sarukhanova", country: "Georgia, United Kingdom", runtime: "16:45" },
              { title: "Graft Versus Host", director: "Giorgi Gago Gagoshidze", country: "Georgia, Germany", runtime: "30:00" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "DOCA Presents: Georgian Documentary of the 1970s–1980s — visual memory between myths and reality",
            films: [
              { title: "School in the Mountains", director: "Teimuraz Dolidze", year: "1978", runtime: "10′" },
              { title: "Haymaking Month", director: "Merab Gagua", year: "1980", runtime: "9′" },
              { title: "Wilderness", director: "Alexandre (Dato) Kokrashvili, Sandro Tushmalishvili", year: "1982", runtime: "16′" },
              { title: "Women Behind the Stone Wall", director: "Tengiz Malania", year: "1990", runtime: "20′" },
              { title: "Tushetian Carpet", director: "Shergil Shonia", year: "1972", runtime: "10′" }
            ]
          }
        ]
      },
      {
        time: "13:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Sound Design Studio Uzupo presents",
            films: [
              { title: "Hide-and-Seek", event: true }
            ]
          },
          {
            hall: "Hall 3",
            films: [
              { title: "Arrebato", director: "Iván Zulueta", year: "1979", runtime: "115′" }
            ]
          }
        ]
      },
      {
        time: "16:00",
        halls: [
          {
            hall: "Hall 3",
            kicker: "Faust 100 — anniversary screening with live musical accompaniment",
            films: [
              { title: "Faust", director: "F. W. Murnau", year: "1926", runtime: "116′" }
            ]
          }
        ]
      },
      {
        time: "17:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "The Kartli Kingdom", director: "Tamar Kalandadze, Julien Prebel", year: "2025", runtime: "104′" }
            ]
          }
        ]
      },
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "International Competition",
            tags: ["Competition", "Rescreening"],
            films: [
              { title: "Letter from a Hitman", director: "Hleb Papou", country: "Italy", runtime: "13:40" },
              { title: "Rage", director: "Fran Moreno Blanco, Santi Pujol Amat", country: "Spain", runtime: "18:42" },
              { title: "The Mine", director: "Randa Maroufi", country: "France, Italy, Morocco, Qatar", runtime: "26:00" },
              { title: "Hidden in Frame", director: "Ana Sarukhanova", country: "Georgia, United Kingdom", runtime: "16:45" },
              { title: "Graft Versus Host", director: "Giorgi Gago Gagoshidze", country: "Georgia, Germany", runtime: "30:00" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Closing of European Cine Tour",
            films: [
              { title: "The Man Who Couldn’t Remain Silent", director: "Nebojša Slijepčević", runtime: "14′" },
              { title: "9 Days from My Window in Aleppo", director: "Issa Touma", runtime: "13′" },
              { title: "City of Poets", director: "Sara Rajaei", runtime: "21′" },
              { title: "Timecode", director: "Juanjo Giménez Peña", runtime: "15′" }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 5,
    date: "20.10",
    weekday: "Tuesday",
    slots: [
      {
        time: "11:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Science Popular Documentary Films",
            films: [
              { title: "Georgia at the Origins of Megalithic Culture", director: "David Goguadze", year: "2025", runtime: "55′" },
              { title: "The Ruthless Laws of the Kingdom of Colchis", director: "Toma Chagelishvili", year: "2022", runtime: "15:55" },
              { title: "A Light in Black", director: "Lia Komakhidze", year: "2026", runtime: "37:00" }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition"],
            films: [
              { title: "Cuongs Kiez", director: "Milan Arius", country: "Germany", runtime: "17:25" },
              { title: "Easter Day", director: "Mykola Zasieiev", country: "France, Ukraine", runtime: "16:38" },
              { title: "Butt-Face", director: "Guillermo de Oliveira", country: "Spain", runtime: "17:36" },
              { title: "SOS", director: "Anita Morina", country: "Kosovo", runtime: "15:23" },
              { title: "Liquid Affair", director: "Tamar Magradze", country: "Georgia", runtime: "37:07" }
            ]
          }
        ]
      },
      {
        time: "15:00",
        halls: [
          {
            hall: "Hall 1",
            films: [
              { title: "Nobody in Sight", director: "Kote Kalandadze", year: "2025", runtime: "75′" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Georgian Panorama",
            films: [
              { title: "A Message to Georgians", director: "Tamar Shavgulidze", year: "2005", runtime: "25′" },
              { title: "The Animal", director: "Amiran Dolidze", year: "2019", runtime: "30′" },
              { title: "Ogasawara", director: "Tato Kotetishvili", year: "2015", runtime: "8′" },
              { title: "Watermelon", director: "Tato", georgianOnly: true, note: "საზამთრო" }
            ]
          }
        ]
      },
      {
        time: "16:00",
        halls: [
          {
            hall: "Hall 1",
            films: [
              { title: "Meeting with actor Luka Chikovani", event: true }
            ]
          }
        ]
      },
      {
        time: "17:00",
        halls: [
          {
            hall: "Hall 2",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "Ever Since I Knew Myself", director: "Maka Gogaladze", year: "2024", runtime: "85′" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Institut Français Géorgie presents Chris Marker",
            films: [
              {
                title: "Chris Marker: Essayistic Form, a Journey Through Time",
                director: "Lika Glurjidze",
                event: true,
                detail: "Lecture"
              },
              { title: "La Jetée", director: "Chris Marker", year: "1962", runtime: "28:00" },
              { title: "The Sixth Side of the Pentagon", director: "Chris Marker, François Reichenbach" }
            ]
          }
        ]
      },
      {
        time: "18:30",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "Supporting Role", director: "Ana Urushadze", year: "2026", runtime: "140′" }
            ]
          }
        ]
      },
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition", "Rescreening"],
            films: [
              { title: "Cuongs Kiez", director: "Milan Arius", country: "Germany", runtime: "17:25" },
              { title: "Easter Day", director: "Mykola Zasieiev", country: "France, Ukraine", runtime: "16:38" },
              { title: "Butt-Face", director: "Guillermo de Oliveira", country: "Spain", runtime: "17:36" },
              { title: "SOS", director: "Anita Morina", country: "Kosovo", runtime: "15:23" },
              { title: "Liquid Affair", director: "Tamar Magradze", country: "Georgia", runtime: "37:07" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "Supporting Role", director: "Ana Urushadze", year: "2026", runtime: "140′" }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 6,
    date: "21.10",
    weekday: "Wednesday",
    slots: [
      {
        time: "11:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Student Program",
            films: [
              { title: "Basement", director: "Ana Abuladze", runtime: "12:13" },
              { title: "Nest Station", director: "Rati Katsitadze", runtime: "11:54" },
              { title: "Leaving", director: "Elene Sheklashvili", runtime: "19:14" },
              { title: "Parallelepiped", director: "Salome Khechoshvili", runtime: "16:59" },
              { title: "Until You Answer Me", director: "Luka Kobidze", georgianOnly: true, note: "სანამ არ მიპასუხებ" }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "International Competition",
            tags: ["Competition"],
            films: [
              { title: "Stallion and a Crystal Ball", director: "Christian Avilés", country: "Spain", runtime: "18:21" },
              { title: "What Have You Done, Zarina?", director: "Camila Sagyntkan", country: "Kazakhstan", runtime: "26:48" },
              { title: "Like Other People", director: "Luisa Nöllke, Leo Dzhyshyashvili", country: "Germany", runtime: "17:04" },
              { title: "No Skate!", director: "Guil Sela", country: "France", runtime: "24:00" },
              { title: "Coyotes", director: "Said Zagha", country: "France, Jordan, Palestine, United Kingdom", runtime: "20:00" }
            ]
          }
        ]
      },
      {
        time: "14:00",
        halls: [
          {
            hall: "Hall 1",
            films: [
              { title: "Supporting Role", director: "Ana Urushadze", year: "2026", runtime: "140′" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "Cinema and Resistance: Memory of Protest",
            films: [
              { title: "Lawyer Behind the Wheel", director: "Omar Tsotsoria, Magda Gugulashvili", year: "2026", runtime: "18:06" },
              { title: "A Review Lesson", director: "Tamara Mshvenieradze", year: "2026", runtime: "26:46" },
              { title: "Pedestrian Bulia", director: "Magda Gugulashvili, Omar Tsotsoria", year: "2026", runtime: "24:46" }
            ]
          }
        ]
      },
      {
        time: "16:00",
        halls: [
          {
            hall: "Hall 2",
            films: [
              { title: "The Rezo Gabriadze Filmmaking Workshop", event: true, detail: "Project pitching" }
            ]
          }
        ]
      },
      {
        time: "16:30",
        halls: [
          {
            hall: "Hall 3",
            kicker: "Goethe-Institut Georgien presents Short Export 2026",
            films: [
              { title: "Like Carnations", director: "Emine Demir", runtime: "23′" },
              { title: "Living Room", director: "Verena Kuri", runtime: "7′" },
              { title: "Mother of a Son", director: "Kevin Koch", runtime: "20′" },
              { title: "Joy", director: "Vera Herr & Luis Schubert", runtime: "7′" },
              { title: "Correct Me If I’m Wrong", director: "Hao Zhou", runtime: "22′" },
              { title: "Kute", director: "Silvi Holbaum", georgianOnly: true, note: "კუტე" }
            ]
          }
        ]
      },
      {
        time: "17:00",
        halls: [
          {
            hall: "Hall 2",
            kicker: "Premiere in Kutaisi",
            tags: ["Premiere"],
            films: [
              { title: "I Was Thinking of You", director: "Maka Gogaladze", year: "2026", runtime: "60′" }
            ]
          }
        ]
      },
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Sesilia Takaishvili — 100",
            films: [
              { title: "Limits", director: "Lana Gogoberidze", year: "1968", runtime: "63′" }
            ]
          },
          {
            hall: "Hall 3",
            kicker: "International Competition",
            tags: ["Competition", "Rescreening"],
            films: [
              { title: "Stallion and a Crystal Ball", director: "Christian Avilés", country: "Spain", runtime: "18:21" },
              { title: "What Have You Done, Zarina?", director: "Camila Sagyntkan", country: "Kazakhstan", runtime: "26:48" },
              { title: "Like Other People", director: "Luisa Nöllke, Leo Dzhyshyashvili", country: "Germany", runtime: "17:04" },
              { title: "No Skate!", director: "Guil Sela", country: "France", runtime: "24:00" },
              { title: "Coyotes", director: "Said Zagha", country: "France, Jordan, Palestine, United Kingdom", runtime: "20:00" }
            ]
          }
        ]
      }
    ]
  },
  {
    n: 7,
    date: "22.10",
    weekday: "Thursday",
    slots: [
      {
        time: "15:00",
        halls: [
          {
            hall: "Hall 1",
            films: [
              { title: "VIP Screening Room 1", event: true }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "Experimental Screening",
            tags: ["+18"],
            films: [
              { title: "The Sands of Silence", director: "Giorgi Mrevlishvili", note: "+18" }
            ]
          }
        ]
      },
      {
        time: "17:00",
        halls: [
          {
            hall: "Hall 1",
            kicker: "Caucasus Cinema Presents",
            films: [
              { title: "Arvelodi", runtime: "9:34" },
              { title: "Hermit", runtime: "7:46" },
              { title: "Tale of Trees and Humans", runtime: "7:23" },
              { title: "Headless Statue", runtime: "8:17" },
              { title: "Chanchati Capsule", runtime: "7:32" },
              { title: "Proletarians", runtime: "1′" },
              { title: "Move the Horse", runtime: "10:29" },
              { title: "Motion Detection", runtime: "3:21" },
              { title: "Last Bell", runtime: "9:41" },
              { title: "There Was Light", runtime: "3:41" },
              { title: "Hitchhikers’ Guide to Racha", runtime: "11′" },
              { title: "Fragments of Love", runtime: "10:16" },
              { title: "Tip of Finger", runtime: "8:08" },
              { title: "Ureki Magnetic Formula", runtime: "7:44" }
            ]
          },
          {
            hall: "Hall 2",
            kicker: "Georgian Premiere",
            tags: ["Premiere"],
            films: [
              { title: "Tear Gas", director: "Uta Beria", year: "2026", runtime: "96′" }
            ]
          }
        ]
      },
      {
        time: "19:00",
        halls: [
          {
            hall: "Hall 3",
            kicker: "Closing Ceremony",
            films: [
              { title: "Goudji — Creator of Great Art", director: "Nana Janelidze" }
            ]
          }
        ]
      }
    ]
  }
];
