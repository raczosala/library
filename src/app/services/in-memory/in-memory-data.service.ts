import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        "id": "598994a9cb71f98801a835ea",
        "title": "labore magna id occaecat",
        "description": "Cupidatat amet nisi eiusmod tempor amet veniam mollit magna qui sit ullamco sit.",
        "author": {
          "id": "598994a9b0a622301699db53",
          "name": "Reva Myers"
        },
        "publishedYear": new Date("2015-02-04T11:27:38")
      },
      {
        "id": "598994a9d8cfc1ba9985cc35",
        "title": "adipisicing consequat voluptate occaecat",
        "description": "Ex sint sint est commodo.",
        "author": {
          "id": "598994a9537d61bbcb99774f",
          "name": "Herman Bolton"
        },
        "publishedYear": new Date("2017-02-11T10:14:45")
      },
      {
        "id": "598994a955c63a9b33d061b7",
        "title": "incididunt eu ad amet",
        "description": "Dolore eu proident ullamco cupidatat sunt eu fugiat consequat ut do reprehenderit velit veniam.",
        "author": {
          "id": "598994a95860e65b7e38f825",
          "name": "Watkins Castillo"
        },
        "publishedYear": new Date("2015-05-21T11:42:55")
      },
      {
        "id": "598994a986bbeab7a2c01ecd",
        "title": "aliqua aliqua eu laborum",
        "description": "Veniam laboris minim consequat amet aute ad minim.",
        "author": {
          "id": "598994a9ea1f513b1f08f7fd",
          "name": "Huffman Nielsen"
        },
        "publishedYear": new Date("2017-01-03T08:24:09")
      },
      {
        "id": "598994a972d2e48af033a511",
        "title": "laborum ea in consectetur",
        "description": "Ex aliqua in velit do commodo incididunt incididunt dolor.",
        "author": {
          "id": "598994a9ce453ab6c28d2d38",
          "name": "Jensen Campos"
        },
        "publishedYear": new Date("2014-02-21T10:37:41")
      },
      {
        "id": "598994a930d99d9e86965f3a",
        "title": "sunt incididunt irure ex",
        "description": "Dolore ea consectetur veniam mollit nulla exercitation fugiat esse eiusmod qui.",
        "author": {
          "id": "598994a9a3549af56d46f2e5",
          "name": "Jan Terrell"
        },
        "publishedYear": new Date("2017-06-27T02:16:35")
      },
      {
        "id": "598994a90552ca814a3e83d8",
        "title": "dolor reprehenderit amet Lorem",
        "description": "Anim id labore aute voluptate non eu consequat ullamco non est velit velit.",
        "author": {
          "id": "598994a94531345f5a5509cf",
          "name": "Day Merritt"
        },
        "publishedYear": new Date("2015-08-20T08:45:14")
      },
      {
        "id": "598994a959cc70e6ad0d4eec",
        "title": "mollit sunt non ullamco",
        "description": "Reprehenderit consequat excepteur ullamco do ea.",
        "author": {
          "id": "598994a9c77dfce582c4969f",
          "name": "Sara Forbes"
        },
        "publishedYear": new Date("2015-01-22T02:15:22")
      },
      {
        "id": "598994a9fcc0db26886c0f14",
        "title": "ut velit consectetur elit",
        "description": "Sunt Lorem aute dolor proident occaecat labore in laborum.",
        "author": {
          "id": "598994a99447e3e52562f408",
          "name": "Charlene Donaldson"
        },
        "publishedYear": new Date("2015-09-06T06:03:36")
      },
      {
        "id": "598994a90dc4823537b22f36",
        "title": "do in commodo sint",
        "description": "Irure est officia proident aliqua voluptate adipisicing incididunt occaecat et elit aliqua Lorem.",
        "author": {
          "id": "598994a9d4014a83b194e1eb",
          "name": "Howard Delacruz"
        },
        "publishedYear": new Date("2014-04-07T05:20:32")
      },
      {
        "id": "598994a99a6a191ad8b4a323",
        "title": "qui non nisi commodo",
        "description": "Aute ea quis nisi id sunt cillum mollit cupidatat nulla tempor aliquip occaecat eu do.",
        "author": {
          "id": "598994a97298db9343ed1cfe",
          "name": "Paula Riley"
        },
        "publishedYear": new Date("2015-02-14T06:25:13")
      },
      {
        "id": "598994a9391a0fe8052e2bdb",
        "title": "aliqua irure voluptate et",
        "description": "Veniam non cupidatat ullamco nulla enim excepteur ipsum do.",
        "author": {
          "id": "598994a9e114d07a3e4f2ce8",
          "name": "Yvonne Hayes"
        },
        "publishedYear": new Date("2014-08-01T04:53:11")
      },
      {
        "id": "598994a9131e7d411fb0d90f",
        "title": "reprehenderit eiusmod dolor officia",
        "description": "Sit Lorem laboris officia ut eiusmod dolore magna sit.",
        "author": {
          "id": "598994a9763ec0e34c2470d0",
          "name": "Fitzpatrick Richmond"
        },
        "publishedYear": new Date("2015-12-05T03:12:55")
      },
      {
        "id": "598994a95dabe941ef7efd33",
        "title": "laborum laborum veniam enim",
        "description": "Aute reprehenderit sit nisi nisi incididunt Lorem.",
        "author": {
          "id": "598994a9854e1b4a3e8df4e2",
          "name": "Nelson Becker"
        },
        "publishedYear": new Date("2016-10-04T05:24:47")
      },
      {
        "id": "598994a910bb6cb6c2470e42",
        "title": "irure laborum occaecat eu",
        "description": "Eiusmod dolor consequat enim deserunt aliquip dolore veniam veniam magna laboris occaecat magna aliquip.",
        "author": {
          "id": "598994a9e9e692cb376a709c",
          "name": "Mara Greer"
        },
        "publishedYear": new Date("2017-02-26T02:03:43")
      },
      {
        "id": "598994a938171611569025e2",
        "title": "velit sint deserunt exercitation",
        "description": "Aliquip reprehenderit velit ut irure est esse id id.",
        "author": {
          "id": "598994a9430e85b0a22604d1",
          "name": "Margret Horne"
        },
        "publishedYear": new Date("2015-04-22T05:03:24")
      },
      {
        "id": "598994a9a2c809cb93183423",
        "title": "fugiat duis do esse",
        "description": "Aute enim non tempor fugiat eu nulla dolor in.",
        "author": {
          "id": "598994a909c3e9d729e4725c",
          "name": "Leonor Hubbard"
        },
        "publishedYear": new Date("2016-06-03T12:31:02")
      },
      {
        "id": "598994a9bd2bd6457c1d5251",
        "title": "enim eu exercitation anim",
        "description": "Esse quis consectetur tempor deserunt nostrud et nostrud aliquip duis Lorem ut non magna.",
        "author": {
          "id": "598994a934cdfed84f039524",
          "name": "Glass Cantrell"
        },
        "publishedYear": new Date("2015-05-12T04:41:33")
      },
      {
        "id": "598994a99a8b48751fdd5a4d",
        "title": "fugiat laborum nostrud dolor",
        "description": "Velit sit dolor est sunt incididunt deserunt.",
        "author": {
          "id": "598994a965e2dc34a3c9612f",
          "name": "Ruiz Dixon"
        },
        "publishedYear": new Date("2014-09-08T05:09:18")
      },
      {
        "id": "598994a92c7dbaeefe808dd1",
        "title": "non aliquip ea non",
        "description": "Consectetur in id culpa incididunt.",
        "author": {
          "id": "598994a9adaf954335837778",
          "name": "Cathleen Medina"
        },
        "publishedYear": new Date("2016-02-22T07:12:21")
      },
      {
        "id": "598994a9eb57cc3fcc4f9ef2",
        "title": "quis amet elit exercitation",
        "description": "Elit labore do aliquip velit sunt.",
        "author": {
          "id": "598994a93b9b0819b2745847",
          "name": "Mcguire Cooke"
        },
        "publishedYear": new Date("2016-02-18T04:36:40")
      },
      {
        "id": "598994a957b16ae84f4d6698",
        "title": "Lorem incididunt exercitation eiusmod",
        "description": "Ipsum dolore culpa sit tempor excepteur cupidatat.",
        "author": {
          "id": "598994a9e84cbcf4534c32b0",
          "name": "Brandie Woods"
        },
        "publishedYear": new Date("2016-12-30T05:09:56")
      },
      {
        "id": "598994a9524f30a49e440957",
        "title": "eu laborum aute proident",
        "description": "Et nostrud dolor est cillum deserunt incididunt eu.",
        "author": {
          "id": "598994a91fd1969fd96dbb91",
          "name": "Simone Lewis"
        },
        "publishedYear": new Date("2017-04-02T04:47:05")
      },
      {
        "id": "598994a9d9590573f4c87384",
        "title": "officia incididunt id in",
        "description": "Labore non sint veniam enim ea mollit ullamco ut nulla excepteur pariatur in voluptate et.",
        "author": {
          "id": "598994a9aa0eb1ac9c09edeb",
          "name": "Rhodes Fuller"
        },
        "publishedYear": new Date("2015-05-24T03:16:53")
      },
      {
        "id": "598994a9e01440d1685be8cc",
        "title": "exercitation dolor tempor ipsum",
        "description": "Nostrud fugiat ea reprehenderit sit sunt labore.",
        "author": {
          "id": "598994a9b0d38d662689091b",
          "name": "Flores Reed"
        },
        "publishedYear": new Date("2014-06-02T08:49:50")
      },
      {
        "id": "598994a938237ce3e03d14ae",
        "title": "do voluptate veniam cupidatat",
        "description": "Est est reprehenderit aute eiusmod aliqua magna qui voluptate est ea ad.",
        "author": {
          "id": "598994a9ad1e676cfe6946b0",
          "name": "Deirdre French"
        },
        "publishedYear": new Date("2017-06-24T09:55:08")
      }
    ];
    return { books };
  }
}
