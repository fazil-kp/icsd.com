'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a0c4b5e29773d26e23e002bc7b736786",
".git/config": "1d27da0b3e18db1253def1bad20cf794",
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
".git/index": "309620446da76b20b758c0a64af07369",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e36c26a5384b5cba3bf507ca6638f7e7",
".git/logs/refs/heads/main": "bb1a4f94fd47dbe86dc0ad553377bdaf",
".git/logs/refs/remotes/origin/main": "0c71b4ba067168ec29c9bb86221e8938",
".git/objects/00/697b606deae0906faca5679e040e9178328448": "57a2ddeaeb4480bd6b2c4686d3d5e912",
".git/objects/00/7b29f642f8d639b180dc3204968f98b6c6bfb0": "352290d76fa23a1f58677c0a80398aa4",
".git/objects/01/62d6960729764c5296a168e72ef44f05fa68b7": "e8d93737d58d30b18bfb47dc6822175c",
".git/objects/05/6b4c1c49d9a20390b0f0b9bd315faaf226fb5a": "281556ad74cad3d8dcb6cbdfd7e0bcd5",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/05/af94b50d515b2ff48b7951ff571ca320e8f2e1": "bd7cc6dc7d6927de8c15a29f74549a0b",
".git/objects/08/821a2910b450e94aa5041b6591a5b6f5dd5f80": "a0416df455fd36f5e2a132c734ea514f",
".git/objects/09/c4e6e9c91bca8c2ca9648de792347030b5232c": "b8cd410a14d211c4dbe7d1742b59b6e9",
".git/objects/0b/22f949fd4e1ecdf5718648ce935d15dcdc0297": "c535f5a7ed7d89a358b9fb864dcd4077",
".git/objects/0e/f67efadb48302be0c7b40676040c16f3999e3b": "a5b5cb282e60420f6b272c3c7933fd63",
".git/objects/0f/76d21c77b92aea5be70edda71b972d10a14c5d": "fd6c00bd931768a2e3da710c6b6ef285",
".git/objects/11/eb45347557c3cc09b5b859f11779a0edbb248a": "c29ce3f7812d43bc01d7373dab2a3218",
".git/objects/14/9b7f8db2a81b36984901a97e29491f4c22898d": "a9e87e51dd772856815e8973829de421",
".git/objects/16/adebd8b47e71b21cf7783cf472d586b6bc4f31": "d4d4e24fc654012f90ed69c3e2689402",
".git/objects/16/ddabd277e81f5a9d0975e87150e27e545256c9": "318569eb7046e931459260ea6ee64397",
".git/objects/19/3e24a97aa2c52d80a5ef8a0eb5042caa09aea8": "3f1c9c0192e1dc29ac6b3482796266b5",
".git/objects/19/447c86b81649a69a718f8f7d8dccde51fafde3": "d715e60537955b4a30f9f8cbdd99cd36",
".git/objects/1b/96436e9414cc6177a728e42d73d948bcca5e0b": "ac0e7081ffafeb80b20f9e56a0a357ad",
".git/objects/1b/d676245fdb828f517885b9b7ecc674cc8b21a8": "58b89b4af1c6bd11b716943c5a2762ce",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/e75e2865f555866a8408975fa96b7d11b4f502": "0b7a51e4bbdc9df75f19e00ab6883278",
".git/objects/22/695db53a489e6962a2effde99548f830228ee6": "82e7245beaf580992f32f915dd2f64cd",
".git/objects/23/92498189928fb880da3a44e12e4cedaa33e6da": "4eb21196e7f830f33e27bd559c373f17",
".git/objects/24/9ac76a5901ee64df284b8209fab91ce8b0d670": "00240c79a10a312addbacc09c08be096",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2b/a3cd1cd19fee45cc96d2510b0b4a5025651b01": "6464702e629d2f50fdc9037f43b6c461",
".git/objects/2d/91785f61f830d7f5bd649e3f4e9197491c8455": "29105b497fa9fd921891f4c81142e639",
".git/objects/2f/0ed40526089a340f0a02d23e3087dbd391048f": "2ebd698450fd0987b72a3889fe97ad6b",
".git/objects/30/13d5c596f2e18f09feaddfc84b489bc7568849": "15c8177e1d2f3d3249580553200963c9",
".git/objects/35/d8996dd7670cab8086af075e652d8524507e63": "ff8312fa121528e09ba48e0e0c10da76",
".git/objects/37/61b4cbb744bb412bd1988c02cc3be55e68b498": "46d6997b43bf34ed2a3b73767ca387e0",
".git/objects/38/a5dbbe0d464d4c25608bd1cd9939c1b1bdcfc9": "7c96db4c8ced09ad0110b40c96b78de0",
".git/objects/39/05c06e049f8a98305574743b75053ffbefbff7": "a79dba509f394ddfc435ffcd88eb5e36",
".git/objects/3a/68cf463b1c8695645a0c47846fafb62013260d": "c4abfec8d1e6c09625553f0665376b5f",
".git/objects/3c/b5c69ab5c05c29fff4b04854f29e9f13fa169c": "d2a56bf091e6897d19a258727774cace",
".git/objects/3c/e8a0c573d16e63bf3f138c6797f25bf269d94d": "b66131193c7bd946cab417e5fdc9423b",
".git/objects/3d/f40a9f98f900903f9fc45d832c9fbbfb8ef1a6": "09c28558d741eb57bc22ea96e6301154",
".git/objects/40/3228d84ef98755737aadde6825d0d0525c152f": "04afd9a187d40125cad4b5fb2a957486",
".git/objects/40/f295568a73d52b0236fd40832726730a26ac78": "2941939c49c559fcbb1511576f996e0f",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/b8d35008336626e60cdb325c7eb8065f493773": "a8aea96ba418ea2b1e7d13adb544122b",
".git/objects/45/76f0e26a1e5f911133ac5f52daf3958ff83bb8": "19162fbbeebbb8f153ac201475d2c369",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a34c69fc3adf3e1705a60e4991476ed4f44742": "aed5e2ab14e2c70acd272694a6b10473",
".git/objects/47/6d5d8be284a9869b3ef3ee59b000224a332cbc": "83ebd959562cddbd4bc12f08e2f48aa1",
".git/objects/49/5d85fdc101da2c40aaeeeedd42ffb2821599cf": "3ae016c7954024c8a56a6323db6293de",
".git/objects/49/b4d4fe5f91151e0236675e9b8351cbbff43c89": "e098eba89e82f4984ee30dfbf8d3fea9",
".git/objects/4a/96fb913ca29c0c3c7eb6ab27596cc32ac56bdb": "1d001c4158efcb1a01e1e87f7c6028e3",
".git/objects/4d/3f23d11f25df8052ef147ff5986fd268f6b68d": "81748c5d9a0026700b13c35701071c74",
".git/objects/52/038210be9c965f1d004d10f2ff0570cfc1a0e8": "7a6c86a103e1b775a589b4262890e002",
".git/objects/53/1b36f48f83493ac833e1b346c577665c9d0384": "7d9b09254ae4504937efd6f44393c9d8",
".git/objects/54/33224920ca34d578701e49acd42779834876f9": "9c0535125fab2a138e9d109ea8c57e8d",
".git/objects/54/dcab99b2561c3864651234b5e3ccba1dd898d6": "c45d1bf398184254227a9a0c3082232a",
".git/objects/55/712f536a5b218047bd670051aae029bfe28adc": "6448539c7920a4c2578dd47081910bd3",
".git/objects/55/a68a587e73f0a3b52239ae8a2fefa4fa910bd7": "25071238cfc81bf39aff039dbfb56a68",
".git/objects/56/e09bbdd9691790819446804617b61ea10b0225": "f7e1dacad31314366a31ebda0d9cebdc",
".git/objects/57/2cac80e0d6ee80aa82eb93deb5c2bd8f1913da": "f826bb7d9f013a6675763b9c75b23e38",
".git/objects/59/140db3fea3c49562fd1f2d2f44da29f184f0f2": "c34c2bf1762e4f4304a862470b044e02",
".git/objects/5b/479f6dbb9cced59a2023efa679803e32177477": "28c34ba1ce9a1700425a2de81758a3da",
".git/objects/5c/4eefaf5d9626fdca5c87e856c716ac2194985b": "63c526d972a5462b13d919f90db5ba16",
".git/objects/5d/a95b1d5fe6037a47b3e266b6303139134bc519": "e2ee84d252a47498cbaa39fc9c5713fc",
".git/objects/61/50d77b5343bd303958bbb6922785b692f06ae8": "bcd958a0613eda6c5e5964cd08ab9bed",
".git/objects/61/7ea3bd8f67aca3688fb2289e77a343cb4d5e7c": "d1a1a2b1f2c5ab5390885a9b6e90f054",
".git/objects/62/5a1082d45bcda211b66770d5539bb99cf52fbd": "927ec2e3d8944e88482c6d1031e64b46",
".git/objects/62/ee9b5bb64c593973d2ab40df5df320a2081fde": "3517f170a900e2185746e8a532509595",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/e3acde957ad4b6541c2cc3eff37443162629e0": "9bf8b136977dd5f48568e30b721d06b8",
".git/objects/69/7fb6acb6e0770db2ebaea560dde471bed803cf": "60f4a0ff33abb3660f887e87c7b4d056",
".git/objects/6a/15b65f7cb82e99fb784e47c0fa066269e9c6b8": "b535290f1336bb0d400a01b49fc6c6c5",
".git/objects/6a/9681940c6bbe783b5e10d6ef66d69bb22f3c83": "e99545577d166935af5b317c3e8d727e",
".git/objects/6b/b4c6cd14daf7ee1280e8655c321d93d64f1f6d": "89ec5ae6c5a1a861eec58396317a24a5",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/56dd487afba49b957f208cc71adb025622daa3": "6a40587be2ba203ae2a777d1bbd13a4b",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7e/e50b8019907a9576cc9cf202fdde5f2597b046": "fee481f2701d187e84e5a5744e4481fd",
".git/objects/80/41d800ba552a8c0e8ed59af2a46225d93a6aa0": "203991bbaba8d66be9567cfc6dacad2c",
".git/objects/80/67a629b8c3d352687b010062f6ac380920f378": "2e40a33faf8ab06d5767d8652458f589",
".git/objects/80/f16a4d5ed5274769bb96c4925e86619ed9837e": "3306f90df6971c60de026ff6d554eed3",
".git/objects/81/87ae996dfe6de7eaa46f71dd5fb3e6f6daa426": "6546d0c6d4d6fea8265c869869506650",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/ac9bd828ed98e443c05ff31e3a2d6c60931864": "d2f35e6428ca8c371a988c83ac9ed595",
".git/objects/86/d6ccbfaafa1d927197bd80d407ff0991de401f": "e7f825870d2b7af99acc28cea483515e",
".git/objects/87/28a48dd11eb19621b5aedd26c1bec2871621d5": "91643a0d5a6594803651eb0e97dd7512",
".git/objects/87/afcd457f8c8829debaf982df1e1f8c3513629c": "3f5976f88dac542b1aa85177e4510d3b",
".git/objects/88/a9fe68485a6b6f1af00c407db6e4e164ad07ab": "1fdd0e74dbbb362187a6e709590b9e3b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/970074ad1eb2ec3d42bda266f2e39c43dee655": "f58d469fa3ceef912f277dd456d3253e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/03ef15b1a1e337d74c76fa40a2ad0615053ea7": "5c80325d8bdcd7882d04d8fec4c42147",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/6522b088b0d62e95e48d82c6b2dab4dedc5f42": "4bff6c14f53aa201cf5d84e435fa709e",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/95/b15f0a59daed6036eee21dde352e1849308e5f": "6976bc82088b3d7b4c4f9acc799c1c4f",
".git/objects/95/ddd38284785bb809296f806a0b89982a423c83": "4f78b71175dee98122ea0e52608d63ec",
".git/objects/96/11512efdbd50e7c332e9de5d0336a38af4b9b3": "13b7b9bbf5c435a8f00d8be583d47a48",
".git/objects/96/2f735f9afa283e6d33c7dfedff7e23b6196aae": "8200e90dfbc20c3a1290c552ff978813",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/99/e4f367027065e947d59eabd71e1d1765ccfd2d": "d69d2d794a6fbe14282b1c2976e39bb1",
".git/objects/9e/3aae595103e28485c18d47777ec0d6a559f485": "cbcac253169d90c7428bce4c6338eff3",
".git/objects/a4/a0a3812ca048a555382bcbdfe0aa6d7888b53b": "181182cfda0aa42ca319ee4e4216053c",
".git/objects/a8/4a9202e7fd0420c6ce65f4f86ed09b4b890336": "674898643feb037d3f30c20a8df6b104",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ab/6bb553dee187d781a6fd19b2b8fefc01dd698a": "3ae0e3fd3d42e4b86a0c31dcef9fc215",
".git/objects/ac/f63a300032bb1c748ee918de87fce4cc636616": "4ec19d72136a0600c3e88cfd25a1bef2",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/6b16b5b4c120f94df0d473f80b10dc4d7cdb71": "7e7fab8fca6f7db54a463e50cd5070be",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/793468e849e1c58e7f4e50eb387a544c660898": "b0aa7bb9d25cf599b011548e7498f2e8",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/db321939959055697b958709a3121803250503": "f17703f0e3e161fbda6228c700de990a",
".git/objects/b4/7a4e7c9b0d376168da7b3cb687e893d5f502fc": "b1874b0a20ac21a0f276ac645a857590",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/87d893544ac08d49609d9604f29dd2145bd988": "16b03ce1e5df47ebbab624423deb7da7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/ab69a5b122b7383aae95aa36b1037cfd66e383": "2caa1ab67b1197a91b7c213546299348",
".git/objects/bc/409d5566b7cdee9c25f6d9ce8c96dc3f31a3eb": "2ac50a59f91119d61b2210fba1d67001",
".git/objects/bc/bd439a10231f5476a1daa717074c39454989a4": "781f6a6d59b2bfe7a6739987e39c7dd1",
".git/objects/bd/0588e63ddfe31b06098b54fb0c1cb2d8646e04": "4e3d4a789f7ffffb725afaefe4203911",
".git/objects/bf/6b24817218aac7b8580cde5b75c14c7853d168": "1937550b216bd2293592bbf66405086a",
".git/objects/c0/b6d32363c1a27565d37570ad68f40a9332be66": "c487c8735461b81ec90e070d1c4b20dd",
".git/objects/c0/d8b01dbc8c397725283dfd0309e52658e21442": "a32933d0860127ffed49e8eb9b583f3e",
".git/objects/c1/57ac10ccad0e2d7e27617296eb443be41bddeb": "911022cf2e03d0e0f70ec854dbeb44fd",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/28835a309c9dcfedabbed85dad66918e0eb98f": "e572330a6e50f4cca13cb5570ade21c8",
".git/objects/c5/a2ec1439caadf707d9c04174a6e298c788b524": "5fd39397876985e4d416a34c22ded43c",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/eabbcbd5172c0bdb9771bcb7b555b5db190136": "cccc872db88e8b261cee4d587a927ff0",
".git/objects/c8/136cadb50c14157f7261bf5af27c4d41a5746e": "3a1cf2b42ed5409fe2d3abadacb393d2",
".git/objects/cb/f52e8d53b87157a2813e56e156304ac16ec857": "bbbf95046344e967d2cd8f112cb258fa",
".git/objects/d0/4830ae470ee4af3874c673060174d2fbc3a330": "57e3187947ccd68b56dfbed51ae9f0c4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/194b23fa1d6290f987d7b1755c4244ceaf91c0": "217a947b481f832d363c443c62106bd8",
".git/objects/df/e66785dacdb6bb80dc9a25546e5b24adc2827d": "05b8ab3fbdca45af35329fe07ac7e143",
".git/objects/e1/ace4c39a0e96f981cef95fb6db1769af417228": "90dc62b1432eea72e3d98bdeaf942433",
".git/objects/e8/897be1483148f1c59e1c3bb475758f6ed494b1": "261347eae1f0c1bac3dfedebdd523d73",
".git/objects/ea/40067b0644dd10cedfc189843f78c21d3b8f0d": "14b8d37babb4384ac60a348ea0a55789",
".git/objects/eb/2af4cf5120677b1c1e5ebb832293dfbbc697bd": "3542b95ff1287f0e89796e6f8b6f1bf6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/f1dfa5b162d8929f7a4b1c15485342d6b68bb2": "0d18d89538f019f1efb2384700c75d1e",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/1528a7371b5ecd538eb32292ea80cc5df680b2": "0f0b9aa3d6589a3bc16520f71c2cc859",
".git/objects/ee/91eb4a35912db01352e9f089462fb5fe4bf13f": "8da71462768aa1d019f9956248d00764",
".git/objects/ef/511f0402089f43dab8929d97c9e3197ad071c2": "f3a218c35dc3778372be93dfbf1619b1",
".git/objects/f0/8d4861f569ee309e83c15a72f1c387a3f68690": "f46857e6daa6335effa6b0e771e919f7",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/97fdf7da7cc81570ad708b6bbcebb466872a00": "cb53258536fa150458018eb80ab75101",
".git/objects/f2/f99d8234879b47a264655f32787383d79d13c0": "92de88a61960d1d0f6b384b86532ea0c",
".git/objects/f3/0c48f5cc60533dad7235418e6676e5393959e0": "35e074c7d6ff96325e54fd32856c4bbc",
".git/objects/f3/12fe5ae853b3b16482ed3a6477a142fae8d5ce": "d785362dc61e8972a25fa1bb4bbf6269",
".git/objects/f3/f44b18a96cd3768471f773917727b6c2550056": "04acb8649ef142f4ffce3734404b145a",
".git/objects/f8/7ad0d0714c4ab85ee37359854eadd2729b5062": "6071bbcdcf589033d08488fc028fff97",
".git/objects/fa/7d47d243209b06e1375b72ed269501134ee18e": "d1d50426af8c84d2c1613dd99837e42d",
".git/objects/fe/cfe27077550901d8c8d4f18300c0dda1380eaa": "7a929a13e7e9fd084e02f6d800dd7950",
".git/refs/heads/main": "215ea957613fe04df4b46406f445f3c6",
".git/refs/remotes/origin/main": "215ea957613fe04df4b46406f445f3c6",
"assets/AssetManifest.bin": "4a2c3f08d5b541698694419988ec974f",
"assets/AssetManifest.bin.json": "255d5ff07dc983e1422e4f60a5fe0cf2",
"assets/AssetManifest.json": "009c00d1ce32a884baf1647203cbabaa",
"assets/assets/images/ban1.jpg": "1faf5386ce4ca53d6d2b3b228869500c",
"assets/assets/images/ban2.jpg": "4bc776560bbb08d04d3ea36b7cc0117c",
"assets/assets/images/ban3.jpg": "cf239cb215e813b194cf6440a9230a8f",
"assets/assets/images/dyuthi.png": "13afc9652d6d15f77a80e2ac3029e852",
"assets/assets/images/rcss.png": "830fc2e12cd92e5b98f020db2ba100a2",
"assets/assets/images/splash.png": "8f6952980ff6ca2ca51bddd8ed12da14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "eaea2735f8440fbd52bcd87460b3f7bf",
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
"flutter_bootstrap.js": "0157e67a7b40bef63c89a07fd6c557f0",
"icons/Icon-192.png": "e45eaa6463944886ae286e64332240df",
"icons/Icon-512.png": "934c44107ea1e134fc5301bb32b33d90",
"icons/Icon-maskable-192.png": "e45eaa6463944886ae286e64332240df",
"icons/Icon-maskable-512.png": "934c44107ea1e134fc5301bb32b33d90",
"index.html": "aef91abc6505f5f0b3c09159d27d6ad7",
"/": "aef91abc6505f5f0b3c09159d27d6ad7",
"main.dart.js": "4578191fc756e422a2e87d146becf813",
"manifest.json": "a8682153409db51e37c5e4fd665ab652",
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
