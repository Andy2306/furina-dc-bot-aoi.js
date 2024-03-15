module.exports = [{
  name: "img",
  aliases: ["image", "images", "png", "jpg", "jpeg", "gif", "webp"],
  code: `
  $author[Random image;$userAvatar[$authorID]]
  $description[Requesed by <@$authorID> !]
  $color[$userRoleColor[$authorID;$guildID]]
  $image[$randomText[
  https://i.ibb.co/hR65s2D/illust-110980340-20231208-134605.png;
https://i.ibb.co/sjFzxWc/illust-110980340-20231208-134603.png;
https://i.ibb.co/hsFBs0B/illust-110976252-20240107-180535.png;
https://i.ibb.co/cLk1j88/illust-110980340-20231208-134556.png;
https://i.ibb.co/fqrhrqr/illust-110954844-20231201-132752.jpg;
https://i.ibb.co/4Y62qZV/illust-110975996-20240107-180505.png;
https://i.ibb.co/THKxJ0D/illust-110897119-20231203-164630.jpg;
https://i.ibb.co/zVtB1Fd/illust-110801258-20231201-132745.jpg;
https://i.ibb.co/s6j9b66/illust-110691560-20231201-163408.png;
https://i.ibb.co/Yb4ZPCM/illust-110741850-20231201-132910.jpg;
https://i.ibb.co/yY5pnsj/illust-110706937-20231208-135042.jpg;
https://i.ibb.co/rFc5LPj/illust-110685525-20240107-180448.png;
https://i.ibb.co/zmt7Qv6/illust-110656306-20231203-164302.png;
https://i.ibb.co/BC4t7bZ/illust-110685500-20240107-180450.png;
https://i.ibb.co/xg5n4Xy/illust-110644870-20231201-132904.jpg;
https://i.ibb.co/NsZRX9x/illust-110550993-20231201-132721.jpg;
https://i.ibb.co/4t5rwkv/illust-110642770-20231208-135137.jpg;
https://i.ibb.co/DpLxHmc/illust-110587839-20231203-164723.png;
https://i.ibb.co/1qdWTyc/illust-110532236-20231203-164613.png;
https://i.ibb.co/yfg1xtD/illust-110522754-20231201-132908.jpg;
https://i.ibb.co/3TRVF2S/illust-110375961-20231203-164607.png;
https://i.ibb.co/xgfRPmL/illust-110269164-20231201-132926.jpg;
https://i.ibb.co/P94m6zz/illust-110228947-20231203-164520.jpg;
https://i.ibb.co/N6bMxCQ/illust-110134952-20240107-182142.png;
https://i.ibb.co/JrZ0DNG/illust-110061957-20231202-155335.png;
https://i.ibb.co/2Nz0F1J/illust-110038296-20231201-162132.jpg;
https://i.ibb.co/tCKXgmQ/illust-109943952-20231202-154725.jpg;
https://i.ibb.co/PjW6Fmv/illust-110030916-20231201-163347.png;
https://i.ibb.co/FJr6n70/illust-109885973-20231201-132838.jpg;
https://i.ibb.co/10HRsY5/illust-109804546-20231201-163406.png;
https://i.ibb.co/hsKHXm1/illust-109820196-20231201-132801.jpg;
https://i.ibb.co/b66W6nc/illust-109747127-20240107-180452.jpg;
https://i.ibb.co/8NZ8wmH/illust-109646013-20231201-132939.jpg;
https://i.ibb.co/30fB63C/illust-109591369-20231201-163411.jpg;
https://i.ibb.co/cNRkwFM/illust-109627372-20240107-180616.png;
https://i.ibb.co/pykvPr2/illust-109591202-20240107-183120.png;
https://i.ibb.co/rbSqXKw/illust-108965789-20231203-164314.png;
https://i.ibb.co/KLQNWfN/illust-108553398-20231208-132331.jpg;
https://i.ibb.co/0qxPs63/illust-107993397-20231203-164533.jpg;
https://i.ibb.co/616T1Pq/illust-107480287-20231203-164527.jpg;
https://i.ibb.co/N9s7ZqM/illust-105376682-20231203-164636.jpg;
https://i.ibb.co/ZGRL1MC/illust-106675115-20240107-181100.png;
https://i.ibb.co/f01Z5xd/illust-104460067-20231201-132725.jpg;
https://i.ibb.co/dtz53q0/illust-104379459-20231201-163154.jpg;
https://i.ibb.co/ngCP3hW/illust-102047225-20231203-164542.jpg;
https://i.ibb.co/28vqMr9/illust-99234476-20240107-181821.png;
https://i.ibb.co/vsYNJjB/illust-101499754-20240107-181057.jpg;
https://i.ibb.co/jk04V1j/illust-94143451-20231208-135101.png;
https://i.ibb.co/KV8XQxL/illust-93921288-20240107-181022.jpg;
https://i.ibb.co/7Jr4cYC/illust-94077989-20240107-181027.jpg;
https://i.ibb.co/KDgLSGN/illust-93880995-20240107-180853.jpg;
https://i.ibb.co/37Rb9VM/illust-93801833-20231208-135054.png;
https://i.ibb.co/k5F5FLb/illust-88959903-20240107-181007.jpg;
https://i.ibb.co/YcRZBX3/illust-88157939-20231208-135105.png;
https://i.ibb.co/Nn5njyn/illust-88095443-20240107-181005.jpg;
https://i.ibb.co/T8Z57Tb/illust-88129567-20231202-155403.jpg;
https://i.ibb.co/4m2WVMm/illust-111204186-20240311-124202.png;
https://i.ibb.co/GRQzHzT/illust-113368326-20240311-175013.png;
https://i.ibb.co/SKV4wmB/illust-113681296-20240311-124228.jpg;
https://i.ibb.co/16FLwLH/illust-113650602-20240311-124255.jpg;
https://i.ibb.co/M8MXgNL/illust-110980340-20231208-134607.png;
https://i.ibb.co/jghD8bG/illust-110980340-20231208-134609.png;
https://i.ibb.co/5TfNjTP/illust-110980340-20231208-134612.png;
https://i.ibb.co/W0HDBvt/illust-110982159-20231201-163354.jpg;
https://i.ibb.co/bLmvdhn/illust-110989968-20231208-132357.png;
https://i.ibb.co/vZY84sZ/illust-111031885-20231201-132923.png;
https://i.ibb.co/4s1LDSj/illust-111044395-20231201-132738.jpg;
https://i.ibb.co/3hg5Q29/illust-111046147-20231201-132820.jpg;
https://i.ibb.co/BTYgqNF/illust-111050080-20231203-164848.jpg;
https://i.ibb.co/6mjXmfJ/illust-111059873-20231201-132854.png;
https://i.ibb.co/pvMFFQs/illust-111075576-20240107-180947.png;
https://i.ibb.co/RPN6Kgc/illust-111111645-20231201-163300.png;
https://i.ibb.co/26YS2J1/illust-111121215-20231201-132850.jpg;
https://i.ibb.co/wg8SS2K/illust-111130192-20231201-132855.jpg;
https://i.ibb.co/NCF7sXW/illust-111131493-20231201-132931.png;
https://i.ibb.co/SB5KyL3/illust-111135385-20231203-165134.jpg;
https://i.ibb.co/9sZ9hLZ/illust-111148254-20231201-132809.jpg;
https://i.ibb.co/yfWHfN2/illust-111148721-20231201-132758.png;
https://i.ibb.co/Z2kWQMX/illust-111152845-20231201-132841.png;
https://i.ibb.co/R3tzgv7/illust-111154496-20231201-132755.png;
https://i.ibb.co/801yyB4/illust-111155177-20231201-132831.jpg;
https://i.ibb.co/LNqFtFs/illust-111157207-20231201-132932.jpg;
https://i.ibb.co/hY3Zhsy/illust-111172926-20231201-132817.jpg;
https://i.ibb.co/P431y6d/illust-111194471-20231201-132740.png;
https://i.ibb.co/N2jmY5b/illust-111207875-20231201-163356.jpg;
https://i.ibb.co/CMJMnKJ/illust-111208549-20231201-132835.jpg;
https://i.ibb.co/ZgMzSLc/illust-111208887-20231201-132928.jpg;
https://i.ibb.co/rQ76pqJ/illust-111211339-20231201-132759.png;
https://i.ibb.co/LNqFtFs/illust-111157207-20231201-132932.jpg;
https://i.ibb.co/hY3Zhsy/illust-111172926-20231201-132817.jpg;
https://i.ibb.co/P431y6d/illust-111194471-20231201-132740.png;
https://i.ibb.co/N2jmY5b/illust-111207875-20231201-163356.jpg;
https://i.ibb.co/CMJMnKJ/illust-111208549-20231201-132835.jpg;
https://i.ibb.co/ZgMzSLc/illust-111208887-20231201-132928.jpg;
https://i.ibb.co/rQ76pqJ/illust-111211339-20231201-132759.png;
https://i.ibb.co/q9RwfgK/illust-111212952-20231201-132944.png;
https://i.ibb.co/4N7h5D0/illust-111214018-20231201-132934.png;
https://i.ibb.co/M8GjVXg/illust-111222928-20231201-163334.jpg;
https://i.ibb.co/8rs9bxn/illust-111227839-20231201-132811.png;
https://i.ibb.co/DVkC6Gx/illust-111229628-20231201-132920.png;
https://i.ibb.co/6BnJ4Gd/illust-111232340-20231201-132756.jpg;
https://i.ibb.co/ncSvL9Z/illust-111235485-20231201-132731.png;
  ]]`
}]