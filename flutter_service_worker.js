'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a0c4b5e29773d26e23e002bc7b736786",
".git/config": "06c2c9600573cf2529858a43295e7068",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d56f7e36f8cf8b2dc9704a9f43b1df28",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "69751043a8005298ac7156b00e9c1679",
".git/logs/refs/heads/main": "58a937fcd30b93b01402888e8cb46f4a",
".git/logs/refs/remotes/origin/main": "e6156b6a429142f521bb5678c3080805",
".git/objects/03/42763af8c83c241aff9c5cd2dcb2b6c4b819ad": "f8c2d5faf7507a0c26da7f5bb9321126",
".git/objects/03/a5fbd906c5c2dbc20f77e1bbdaf5b1f7b76c40": "a0d00937082e736ddc43301ceb718587",
".git/objects/05/383ddaba8ce1f177a3640d9cd85bd307649370": "952ff83cf9cdc08362b814fa594a829e",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/3e15fd3190c46468fd67404d086aa4b7cea712": "0c864098db282cabf40bb36ec6b88c1c",
".git/objects/07/741f1e12fb51ae8c024250bae1e8b0bace6b4a": "690aa2a47b18f26141fe4558738e89b6",
".git/objects/0e/9703fe9d1d7f79a04569ab4f1afc90a2ccc3d6": "7005da309d2c24ca0bdc2b96d93305cc",
".git/objects/13/f1c09e0dbe5ad6d20b106376e0243bc6cd6e3f": "6688b6d369574551e846517face19687",
".git/objects/17/40a3232fc57443063eeb3f3ed3cf5f021ccd4f": "427e45c22cbfe36bb90c03e3e4275702",
".git/objects/19/2f912dc74243ade466e9c13752cad7600c2c55": "78b8f912d4f3d587ac31637ec5ab87ff",
".git/objects/19/3e24a97aa2c52d80a5ef8a0eb5042caa09aea8": "3f1c9c0192e1dc29ac6b3482796266b5",
".git/objects/19/cfc065578346d44fcf4cb54f9a77ca7c9df46d": "a147c379e906a5b0683044737c0ff134",
".git/objects/1a/64c04b33686965230fb1a636f06238f3bc5be9": "8276c5d1a62a9cd0ab709938e9fc2e5b",
".git/objects/1a/8cec756e8f3edd004c8b7272a0f2f0cc2171ff": "827ffc64d2a1521a41ea2a6205043c86",
".git/objects/1a/c0bc7287d655529e31cc2bcdd0316889d0e264": "4348af281cecb719b1ec9084dc301a86",
".git/objects/1b/19776554daf34c86fa2fdd4c28067490806f8d": "d834a900e09f955d68a9e4e69a123d53",
".git/objects/1d/bc97492d741a25a0ba6da5736a37a3cad83ce7": "1280a0167e5696d6c54d408f57d4fc14",
".git/objects/1f/8ce650f681b803c48bbd1e248286c689c82f73": "cc78cdd46098d4924c8b3728a390f0c7",
".git/objects/20/223d00a78a0d5e47f8709e08d6d682e86c46ab": "794bceb2aa7ada115eaf2f441d0a457e",
".git/objects/24/e8f2f3d996144bddac7c37b09a88ba957afa0e": "250a748799db98bae15fa2ab0f7245f6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2d/bcc499c947b25649656a2988afc97f986e148a": "97c36e098bdfe128b9219a0965c07cc8",
".git/objects/2e/e3d52883a1594ea490a49a81db86d8ff69db10": "3788ecd19abda7cdf9082293a00de139",
".git/objects/2f/0ed40526089a340f0a02d23e3087dbd391048f": "2ebd698450fd0987b72a3889fe97ad6b",
".git/objects/2f/6c3bbb2c4136457766846fd3adc7d84966ad21": "bd36aef76d9328899e473a27dc108085",
".git/objects/31/a491dd8bb88694acd74fcc4a17cdcfd40d0134": "04bdbfa879d76d13504da47fc79076f5",
".git/objects/3a/0380f2c69c5900bddafc584b385f1daa576a79": "cc5d2dc983cf0ee5922daa13be371862",
".git/objects/3b/0d41e847f915eae07351e1a49e8a4fd80c3cb2": "c4e3a51335f5d1c2d338ecea0526a785",
".git/objects/3d/b33fb1a683bf11ac517024c7cb9c0d7456a6f0": "725afd2d9dac1c9f68b52751eeaaa029",
".git/objects/3f/8eb13e5aff2a3a04081599ff16a7c01e97913a": "937d95eb7b8422521b2bb345f48f56fc",
".git/objects/41/3876bf604c5c7b6a28074a793b0033b6eb7232": "4a5359f08042453d25b48c1696ec8c54",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/ddcefbe49c12e42468d38974728ee1f0fe28fe": "0a20cf1ce1892e2e08c54eb93f8477a0",
".git/objects/44/9a7c2c43e6fcdbb86c69e4430696401a6d41b2": "c88bcba0e6b811f1c629176b980a3aa5",
".git/objects/44/f0fce039a197865670b82000cc9e4808938810": "2a1d6b3d30e2d3cef01b0345bc61115e",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6103ac3fdabb023c573861a0eb8c716cbc5e42": "fbda35082d80ae7dfd5002b63ac76658",
".git/objects/46/7543a5667cc703b89efd45d7be6e179aa8036c": "bd48cd8bb3b6aaff4fef110c44472bc2",
".git/objects/46/ef46881044f4944dfdeec23878cfa7a96cfc3b": "21732a74c2ae71d02d6bbf773715605d",
".git/objects/47/24dbe30f639ddd99fdd86bf147887f27780185": "d54f1d4818f28f87170e4b750d889667",
".git/objects/47/6d5d8be284a9869b3ef3ee59b000224a332cbc": "83ebd959562cddbd4bc12f08e2f48aa1",
".git/objects/49/b967ac7e8c27b689875d09a19de62d0a35ab32": "4ec2b37623ca85192bec1153272dfa03",
".git/objects/4a/96fb913ca29c0c3c7eb6ab27596cc32ac56bdb": "1d001c4158efcb1a01e1e87f7c6028e3",
".git/objects/4c/225a502030c7735609d518c392a84c1a0c8f27": "e2f7cfa7e90935652835cbdf79533143",
".git/objects/4f/997f9d5d63efc62035356d7c274093a59a4bb9": "5a2949fcfc2ec610e7318ddd5f7ec210",
".git/objects/53/7a186900ae1f40dae9cd529edacbd984f59c12": "61385237f5ff0fc4323d9c1f39f971ca",
".git/objects/54/9c018445afe5401be12a3076ebbbbf4d4d7127": "22329f0ea91c6fcf441cc7856cfe4323",
".git/objects/55/a68a587e73f0a3b52239ae8a2fefa4fa910bd7": "25071238cfc81bf39aff039dbfb56a68",
".git/objects/57/2cac80e0d6ee80aa82eb93deb5c2bd8f1913da": "f826bb7d9f013a6675763b9c75b23e38",
".git/objects/58/0ac7db88f9a7ad6a6c10a46bd0db45d1086a77": "f105c16e7d6e4d2573cf4bfb0732d629",
".git/objects/58/65796dd51c3920350791295ce673c60c4e94bc": "2d7ca2151403c51ff466af5ec91301d4",
".git/objects/59/140db3fea3c49562fd1f2d2f44da29f184f0f2": "c34c2bf1762e4f4304a862470b044e02",
".git/objects/59/c3279a6b57eed95858d8a92df096ac73fce258": "2aed4f0791ad904476eaa5939ae11fcf",
".git/objects/5b/e208828538733bc554d489956b4d7f6c70dcaf": "f54982e75d371d2960cbcdceec3acb11",
".git/objects/5f/36b7480cc848e2e16f920d850aafe2e6d9c1a6": "a45109d4cc1b03afbbdd7e8bdd3c1e3f",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/ca1efee6a4b9479f84e6e5086ca74ca82c1f6b": "8b01c5c68530b6173389a3d84c120edc",
".git/objects/63/fd207e4a40161ab7cafb332b61167074880b31": "0bb184cd10231c5da3d935ec517a6db5",
".git/objects/66/a509852692e788e211b88e470aa172549d022f": "3a4fdffa649d92fe716b4afcb379db0b",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/b10164628fa29229735f1291fe1199eddd8d1c": "1be38cc68080dd24bc57d8cc309e11ad",
".git/objects/6e/66e76a24b065bf46ed6b442ba7672e04ba417a": "b098aa2b4c66eb8bf7929a2ab7a4b35f",
".git/objects/70/40b276f3e9085aa7761ff567e19908bee50099": "1303579172d5030048183d69cd80d948",
".git/objects/71/77d592a45dedc700b2f52c339dc7303c9de4bd": "65a7c3402dfc81d6e5a87d1aa98692a5",
".git/objects/71/9a13bc9e2f25f167a9231101b39ee2f9544e18": "11093bd16e44fc7f2dc93a2c2ebfa2d9",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7b/5a627d7a2beabae40d8576b9e150aee64b4e57": "bd27341cecbea97dbd6506a4f47fb72c",
".git/objects/7d/62a79a4fe0548d1408bd16a69e09096933c78f": "5c1a88e5e1071416104eea558a1f75f7",
".git/objects/80/52720dad6dcb66a4e3c1f4e81c2441df09049d": "ccd2b095f95af67b60647de98cd993bc",
".git/objects/83/4e127c506ed99b62ec96ac061182f973b16649": "0c5b93b730ca61c5fe11ddd9a4f1ccfc",
".git/objects/85/ac9bd828ed98e443c05ff31e3a2d6c60931864": "d2f35e6428ca8c371a988c83ac9ed595",
".git/objects/8a/23448ad918bae5404b6951470d48ac5a5df07d": "bbeefe03cba554901b0857a007f0e06f",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/493abb30a471182f1673871b74633c39f9c7f4": "5d5e7fed76989e1b1eae29d5d1de5fcb",
".git/objects/90/49f7a55ed456395308d584f4235a4370046530": "dd59b58460377a193f38366afffabdbe",
".git/objects/91/f8c956b33c91d839e423d15cc94772c66eb7f5": "708678b13026aaa3d5854356c156438e",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/e1f34cca92ecea85287605bf7f9a7bf12f1a5e": "51ef45c1e3435f5b8c810e6477ea847f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/e4f367027065e947d59eabd71e1d1765ccfd2d": "d69d2d794a6fbe14282b1c2976e39bb1",
".git/objects/9a/08681d7947413f7824cf371c2bc6a588744581": "cdeb8a0cae4e1c78ff0c262edda392d0",
".git/objects/9e/3aae595103e28485c18d47777ec0d6a559f485": "cbcac253169d90c7428bce4c6338eff3",
".git/objects/9e/a49de4d2480c2eb5492ea46c117fde9a47ea88": "04ee963a213b621d09f8f990a2f86255",
".git/objects/a4/f1ead6a1d84406dc863ceff7996ecfe6896dc9": "3805bf65f4b129cfbc683e64b753366d",
".git/objects/a6/aa6eec2e39459a845fefe6571116d583a01ced": "5ee477670d2cf82a77278c9836efbe33",
".git/objects/a6/fc3496720ac298cc06ff14e9c370d9433a40f2": "95f7b2e06b53c26413f6caf3828c6dc5",
".git/objects/a7/63b41125c245f92fc4a1ed2b72df3e31c616ae": "ffc9460afb8514c716898240afe65ad0",
".git/objects/a7/8aa1f679774ba35f2a0a2d669ef3a396b1c1a0": "6fdc1551e30943388c43ed8e9104710c",
".git/objects/ad/1e8728e4d7cd46f4d2f2cc9984c281e06e4882": "e5c441cdf7fa84ff434d02cdadceecbf",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/793468e849e1c58e7f4e50eb387a544c660898": "b0aa7bb9d25cf599b011548e7498f2e8",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b9/f16a12c0769c4250222831eb1eb76e47d2fca1": "7a722e20ef9519c4455c61b708a37a96",
".git/objects/c0/7099b4363423af25d68b1e5dfc7a790ef8f4f0": "8d658437b4e8971c0e4c854dcbb1c69b",
".git/objects/c1/8a2dd73e55877bd09b0bc5a6e0649d87a15605": "644a158dc2907483d66ed530dc577057",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/45b688a16a2ad056f2609b93d583f92d416e4e": "042b66f87296ca9a513f74d76f96db46",
".git/objects/c5/f694d5ca348bbe29d65bf77166de8e33483b6a": "de62a6feee3aacaaa59cfd2aa91e277d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ce/27961cb0a055880b4389e264027a4a5154c367": "c25d6e3a053746b2731be113838b71b2",
".git/objects/ce/7346f19eeca13a4219f7cefaf96ad08b383800": "d1dc397310aee4633cff0bd609d1b9e1",
".git/objects/ce/a23b60adae308cb85017c9f524cba35cd54153": "4db58532accbefff1eca110f5f89d1a5",
".git/objects/cf/e8759aca8dea339d4a8af365283df5aca5b467": "257113f0378130039ffbbcfb8d1af3b0",
".git/objects/d0/9a940dab3af58a63a44670a58b4b7341131d59": "b9ecc3a238a4b6b88b4b12481a8ca4a9",
".git/objects/d1/da16daffc70ee202cf56ba26656d78a0d24f3b": "b2c5c7fc5c1028ae042166d5b34d4604",
".git/objects/d3/8efde2e9454be06369188ace54c2b078a55493": "7284646c1ee2f5cc36ed7e58d0ed14eb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/ccb529eed42008aa08b99e492f042d2750a5a2": "6ae8ffc22a47e12068054a96198e2704",
".git/objects/d6/e3e680d69e29fa4c3c9a36a54647ceafb5bd98": "1c047b1e93c4265bff085c188a1df3ed",
".git/objects/d7/09989f6a09d5c0b7c340a3cdef6478233bfd0c": "a28c06ed382eeb81043d5bb46cb0ef40",
".git/objects/d9/d8e93c1289c245f72373349098b3dd1f027e98": "959633f197f5c674e42847f2e75bf45d",
".git/objects/de/4cc9c423750fca34033493314d118a7a37b2e3": "d903bc7802a631f0a1b804b8cab0579b",
".git/objects/de/6df95c04addbccea450ed6b2681bd3e09f770e": "f2dcedb2e96f1403708940195fdc38cc",
".git/objects/e9/44eef1497243924a37bddb15e7ea602c2be818": "4ee05474b7c798e36723c49255c6527a",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/b1dcab3038c83980942423aee020a27daad5e9": "9cd1a2c907f9e8e7883dfce0b820698e",
".git/objects/ee/2d364873768df308559198eb61e987429dc78a": "f396d021a28723a629d6efb0eb75ad09",
".git/objects/ef/a699cfb6a3aa0fe8fb06ad6fc497f2c60eede9": "26cd354fe367a793a17f73f0033c3064",
".git/objects/f1/0b48aaf0eabd3189446ad457b562c3cafe5774": "fa2ab1b0890a60959f4a23e7b1107088",
".git/objects/f1/2606e5d47fd1387726dd3233621367e6072234": "9da5d3eaa842402625d99fe30c6113a3",
".git/objects/f1/a0ce9e50a7a5851f00b7ba2d4af7a1f0887f7a": "47b8360cb1b677465907dee2fb9ef03b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/fe3b04327bc07a94fd84f20d8221a6663a78fa": "0817e7eaf0ded62a0ef1daaca419603b",
".git/objects/f6/c636d84218e75b7c9ee531d4f02ec4ea40791a": "7c62711af76752212b3cac008ef282c6",
".git/objects/f7/461682bb0b0b511e215eee620031873cad62c1": "a0db6b2a1e40f475a61c3717f205d95a",
".git/objects/fa/dc8dee1ddca646a45254d692b2a28d2581b588": "534120f48c8431cf6778dcfe08572b06",
".git/objects/fe/6484d5ab599a92b18b0eab37a8f7801c3b4919": "ae19c9f242651068fe24972613bd4ba5",
".git/objects/ff/0bf8c63a31ad312c1c45a1bd4d5e7f1a81ac9d": "000e00e2f3409419726e9e8e59ac2598",
".git/refs/heads/main": "f0564dec8165b2fd42b0adfca5c0fba6",
".git/refs/remotes/origin/main": "f0564dec8165b2fd42b0adfca5c0fba6",
"assets/AssetManifest.bin": "e15032796fea5cd70cd9d9c7a598ce4d",
"assets/AssetManifest.bin.json": "df6a739276210da0c7b24b1256c32d54",
"assets/AssetManifest.json": "af3de0ed678f61e23902017a5c3c353e",
"assets/assets/images/ban1.jpg": "1faf5386ce4ca53d6d2b3b228869500c",
"assets/assets/images/ban2.jpg": "4bc776560bbb08d04d3ea36b7cc0117c",
"assets/assets/images/ban3.jpg": "cf239cb215e813b194cf6440a9230a8f",
"assets/assets/images/day1_ban1.jpg": "89d09de9e4142306aedfe493e4d401c1",
"assets/assets/images/day2_ban1.jpg": "4c3a5fb2c41f2304d49c629d05d6fb46",
"assets/assets/images/day2_ban2.jpg": "addbd454b764cc472dcf47b2d4334404",
"assets/assets/images/day2_ban3.jpg": "3ddf1822ac6e8ab5a614bfab96908ad9",
"assets/assets/images/day3_ban1.jpg": "5af5fad9dd67394fc3d37d0e4e88b1ae",
"assets/assets/images/day3_ban2.jpg": "29613e61b03818bdc0dcff70c1757269",
"assets/assets/images/day3_ban3.jpg": "efaac9ca347aa7dc7da646ed49a15c07",
"assets/assets/images/dyuthi.jpg": "e2bc847a7ed6021908a17c2486e43328",
"assets/assets/images/rcss.png": "830fc2e12cd92e5b98f020db2ba100a2",
"assets/assets/images/splash.png": "8f6952980ff6ca2ca51bddd8ed12da14",
"assets/assets/images/splash1.png": "9fce8c683aa46961cd204c20f97e1c72",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b67aa7afe2148123f15c85fc87fc3860",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "967aeece198b88f2d1dc49ea33f12a36",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "af2fc3cad011a37c2332c77948428bac",
"icons/Icon-192.png": "e45eaa6463944886ae286e64332240df",
"icons/Icon-512.png": "934c44107ea1e134fc5301bb32b33d90",
"icons/Icon-maskable-192.png": "e45eaa6463944886ae286e64332240df",
"icons/Icon-maskable-512.png": "934c44107ea1e134fc5301bb32b33d90",
"index.html": "ca1b470bdc90f08848893e5f134dd1c1",
"/": "ca1b470bdc90f08848893e5f134dd1c1",
"main.dart.js": "da6bf4f37af69b3d8e92602676f2ddc7",
"manifest.json": "a8682153409db51e37c5e4fd665ab652",
"splash/img/dark-1x.png": "b2ae98f714f716d338e4a83d025ad5b6",
"splash/img/dark-2x.png": "693dc732c6731a40c8df8cf8621aaa55",
"splash/img/dark-3x.png": "b8c083b1c3afab7b50470864fcbaddcc",
"splash/img/dark-4x.png": "b79c5157e1d568824ad4b546d519240e",
"splash/img/light-1x.png": "b2ae98f714f716d338e4a83d025ad5b6",
"splash/img/light-2x.png": "693dc732c6731a40c8df8cf8621aaa55",
"splash/img/light-3x.png": "b8c083b1c3afab7b50470864fcbaddcc",
"splash/img/light-4x.png": "b79c5157e1d568824ad4b546d519240e",
"version.json": "75214bf91a784c50bf5caf421507dff6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
