import { ProductCardInterface } from "../interfaces/appointments";

/* 
cost in eur
*/

export const products = [
  {
    id: 0,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Le Percentuale Arabica",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 17,
    desc: "Кава середньої густоти, солодка і цитрусова. Arabica з Центральної Америки надає суміші значну, але м’яку кислинку та цитрусовий смак. А бразильська арабіка нагадує какао і тростинний цукор.",
    info: "Купаж Le Percentuali Delicat : 100% Arabica з Південної Америки. Суміш трьох видів високоякісної Arabica з найкращих областей Бразилії і Карибського моря для найкращого італійського еспрессо. Особливості італійського способу обсмажування зерен надають характерну міцність і стійкий післясмак фруктів і аромат квітів. Походження: Гватемала, Бразилія Гондурас.",
    imgUrl: "/catalog/la100.jpg",
    link: "",
  },
  {
    id: 1,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 80% / Robusta 20%",
    name: "il Rosso",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 17.5,
    desc: "Купаж il ROSSO : 80% елітна Arabica з Центральної і Південної Америки і суміш високоякісної відбірної Robusta з найкращих областей Індії для найкращого італійського еспрессо. Дуже яскравий сорт, який сподобається любителям міцної кави з кислинкою. Особливий італійський метод обсмажування зерен надає каві стійкий післясмак квітів і сухофруктів.",
    info: "Купаж il ROSSO : 80% елітна Arabica з Центральної і Південної Америки і суміш високоякісної відбірної Robusta з найкращих областей Індії для найкращого італійського еспрессо. Дуже яскравий сорт, який сподобається любителям міцної кави з кислинкою. Особливий італійський метод обсмажування зерен надає каві стійкий післясмак квітів і сухофруктів. Період збору з грудня по березень. Культури знаходяться в тіні дерев Інга. Класифікація SHG виражається в строго високому вирощенні, що визначає високоякісну оброблену каву, вирощену на високій землі.",
    imgUrl: "/catalog/rosso.jpg",
    link: "",
  },
  {
    id: 2,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Ashoka",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 20,
    desc: "Купаж ASHOKA: 100% елітна Arabica, вирощена в Південній Америці. Суміш зерен з кращих областей Бразилії і Карибського моря для справжніх цінителів якісної кави, який має характерний післясмак з нотками мигдалю, арахісу і солодких фруктів.",
    info: 'Зростання кави відбувається на повному сонці - період збору врожаю з вересня по січень і з квітня по червень. Плантація знаходиться у відділі CACUA, де працює кооператив місцевих фермерів "Asociaciòn Mujeres Cafeteras". Класифікація SHG виражається в строго високому вирощенні, що визначає високоякісну оброблену каву, вирощену на високій землі. Кава виростає на околицях району Гірі, навколо гір та пагорбів діапазону Бабабудан. Вона збирається вручну та обробляється традиційним методом.',
    imgUrl: "/catalog/ashoka.jpg",
    link: "",
  },
  {
    id: 3,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 60% / Robusta 40%",
    name: "il Blu",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 15.9,
    desc: "Купаж il BLU: 60% Арабіка з Центральної і Південної Америки і суміш високоякісної відбірної Робусти з найкращих областей Індії для найкращого італійського еспрессо. Особливий італійський метод обсмажування зерен надає каві аромат зі стійким післясмаком фундука і шоколаду.",
    info: "Вирощування в тіні - період збору з грудня по січень. Кава виростає на околицях району Гірі, навколо гір та пагорбів діапазону Бабабудан. Вона збирається вручну та обробляється традиційним методом, що миється.",
    imgUrl: "/catalog/blue.jpg",
    link: "",
  },
  {
    id: 4,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 30% / Robusta 70%",
    name: "il Nero",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 16,
    desc: "NERO – насичена кава. Бальзамічна кислинка поєднується з переливним ароматом какао, який переходить у смак лісових горіхів і смаженого зерна. Його тривалий післясмак несе нотки карамелі та підсмаженого хліба.",
    info: "NERO — це насичена кава, яка має сильний аромат какао-порошку та підсмажених зерен завдяки поєднанню дорогоцінної робусти та південноамериканської арабіки.",
    imgUrl: "/catalog/nero.jpg",
    link: "",
  },
  {
    id: 5,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 30% / Robusta 70%",
    name: "Rococo",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 13.7,
    desc: "Купаж кави Rococo: 30% Арабіки з Бразилії і 70% суміш з високоякісної відбірної Робусти з Індії і Африки для любителів італійського еспрессо. Класична суміш, яка сподобається любителям міцного еспрессо. Особливе італійське обсмажування зерен надає характерну міцність каві і нотки молочного шоколаду з карамельним післясмаком.",
    info: "Купаж кави Rococo: 30% Арабіки з Бразилії і 70% суміш з високоякісної відбірної Робусти з Індії і Африки для любителів італійського еспрессо. Класична суміш, яка сподобається любителям міцного еспрессо. Особливе італійське обсмажування зерен надає характерну міцність каві і нотки молочного шоколаду з карамельним післясмаком.",
    imgUrl: "/catalog/rococo.jpg",
    link: "",
  },
  {
    id: 6,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 30% / Robusta 70%",
    name: "Le Percentuale Vellutato",
    state: "are_available",
    weight: 1,
    weight_box: 12,
    cost: 16.4,
    desc: "Середнє і оксамитове тіло. Середня кислинка супроводжується квітковими нотками аромату. Вміст гіркоти дає простір для високого відчуття солодкості, характерного для стиглих фруктів і шоколаду. В кінці характерні бальзамічні ароматні ноти.",
    info: "",
    imgUrl: "/catalog/velutato.jpg",
    link: "",
  },
  {
    id: 7,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Brasile Signature Dulce",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 6.9,
    desc: "Середнє і оксамитове тіло. Середня кислинка супроводжується відтінками лісових ягід, полуниці та винною нотою. Вміст гіркоти відчувається в ноті карамелі, яка поступається місцем високому відчуттю солодкості, типовому для зневоднених слив.",
    info: "",
    imgUrl: "/catalog/signatureDulce.webp",
    link: "",
  },
  {
    id: 8,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Finca Rio Colorado",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 20.3,
    desc: "Помірна кислотність, невелика гірчинка, середньо-сильна солодкість, тіло середній, м'який. Помірна присутність характерної для цитрусових кислинки з нотами рожевого грейпфрута. Слабка присутність гіркоти з нотами какао і карамелі. Аромати печива та коричневого цукру підкреслюють солодкість.",
    info: "Помірна кислотність, невелика гірчинка, середньо-сильна солодкість.",
    imgUrl: "/catalog/rioColorado.webp",
    link: "",
  },
  {
    id: 9,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Finca La Victoria",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 8.7,
    desc: "Помірна кислотність, характерна для солодких цитрусових. Низька присутність гіркоти. Переважає солодкуватий смак, підкреслений ароматами бісквіта, карамелі та патоки.",
    info: "",
    imgUrl: "/catalog/laVictoria.webp",
    link: "",
  },
  {
    id: 10,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Finca El Cerro",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 8.7,
    desc: "Тіло шовковисте, але не піднесене. Помітна, але приємна кислотність характеризується важливою ароматичною присутністю цитрусових, таких як лимон і грейпфрут. Солодкість проявляється з ароматами бісквіта, карамелі та молочного шоколаду.",
    info: "",
    imgUrl: "/catalog/fincaElCerro.webp",
    link: "",
  },
  {
    id: 11,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 100%",
    name: "Finca Alfoli",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 9,
    desc: "Тіло середньо-низьке, оксамитове. Середньокислий смак характеризується ароматом м'якоті стиглого фрукта, квітів кави, карамелі, шоколаду, що супроводжується середньою солодкістю.",
    info: "",
    imgUrl: "/catalog/alfoni.jpg",
    link: "",
  },
  {
    id: 12,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 100%, pod 44mm/50 pieces",
    name: "Finca Alfoli",
    state: "on_order",
    weight: 0.45,
    weight_box: 0.45,
    cost: 20.3,
    desc: "Тіло середньо-низьке, оксамитове. Середньокислий смак характеризується ароматом м'якоті стиглого фрукта, квітів кави, карамелі, шоколаду, що супроводжується середньою солодкістю.",
    info: "",
    imgUrl: "/catalog/finca_alfoni_44.webp",
    link: "",
  },
  {
    id: 13,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Arabica 30% / Robusta 70%",
    name: "Antica Tradizione il Robusta",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 4.3,
    desc: "Індійська та африканська Робуста, які надають тіло меленоі кави і легкі деревні та підсмажені нотки. Згодом у післясмаку з’являються відтінки сухофруктів і каштанового меду, які надає кінчик південноамериканської кави, які пом’якшують рецепт.",
    info: "",
    imgUrl: "/catalog/anticaTradicioneArabica.webp",
    link: "",
  },
  {
    id: 14,
    category: "coffee",
    type_of_coffee: "В зернах",
    sort: "Robusta 70% / Arabica 30%",
    name: "Antica Tradizione il Arabica",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 4.5,
    desc: "Індійська та африканська Робуста, які надають тіло меленоі кави і легкі деревні та підсмажені нотки. Згодом у післясмаку з’являються відтінки сухофруктів і каштанового меду, які надає кінчик південноамериканської кави, які пом’якшують рецепт.",
    info: "",
    imgUrl: "/catalog/anticaTradicioneRobusta.webp",
    link: "",
  },
  {
    id: 15,
    category: "coffee",
    type_of_coffee: "Мелена",
    sort: "Arabica 100%",
    name: "Finca EL Cerro",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 8.7,
    desc: "Тіло шовковисте, але не піднесене. Помітна, але приємна кислотність характеризується важливою ароматичною присутністю цитрусових, таких як лимон і грейпфрут. Солодкість проявляється з ароматами бісквіта, карамелі та молочного шоколаду.",
    info: "",
    imgUrl: "/catalog/fincaElCerro.webp",
    link: "",
  },
  {
    id: 15,
    category: "coffee",
    type_of_coffee: "Мелена",
    sort: "Arabica 100%",
    name: "Finca LA Victoria Specialty",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 8.7,
    desc: "Помірна кислотність, характерна для солодких цитрусових. Низька присутність гіркоти. Переважає солодкуватий смак, підкреслений ароматами бісквіта, карамелі та патоки.",
    info: "",
    imgUrl: "/catalog/laVictoria.webp",
    link: "",
  },
  {
    id: 16,
    category: "coffee",
    type_of_coffee: "Мелена",
    sort: "Arabica 100%",
    name: "Finca Rio Colorado Specialty",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 7.5,
    desc: "Помірна кислотність, невелика гірчинка, середньо-сильна солодкість. Тіло середній, м'який. Помірна присутність характерної для цитрусових кислинки з нотами рожевого грейпфрута. Слабка присутність гіркоти з нотами какао і карамелі. Аромати печива та коричневого цукру підкреслюють солодкість.",
    info: "Помірна кислотність, невелика гірчинка, середньо-сильна солодкість.",
    imgUrl: "/catalog/rioColorado.webp",
    link: "",
  },
  {
    id: 17,
    category: "coffee",
    type_of_coffee: "Мелена",
    sort: "Arabica 100%",
    name: "Brasile Signature Dulce Specialty",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 6.9,
    desc: "Середнє і оксамитове тіло. Середня кислинка супроводжується відтінками лісових ягід, полуниці та винною нотою. Вміст гіркоти відчувається в ноті карамелі, яка поступається місцем високому відчуттю солодкості, типовому для зневоднених слив.",
    info: "",
    imgUrl: "/catalog/signatureDulce.webp",
    link: "",
  },
  {
    id: 18,
    category: "coffee",
    type_of_coffee: "Мелена",
    sort: "Arabica 100%",
    name: "Ashoka Macinato",
    state: "on_order",
    weight: 0.25,
    weight_box: 12,
    cost: 6.7,
    desc: "Купаж ASHOKA: 100% елітна Арабіка, вирощена в Південній Америці. Суміш зерен з кращих областей Бразилії і Карибського моря для справжніх цінителів якісної кави, який має характерний післясмак з нотками мигдалю, арахісу і солодких фруктів.",
    info: "",
    imgUrl: "/catalog/ashokaMoka.webp",
    link: "",
  },
  {
    id: 19,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 100%, pod 44mm/50 pieces",
    name: "Ashoka Luxury Blend",
    state: "are_available",
    weight: 0.45,
    weight_box: 0.45,
    cost: 16.0,
    desc: "Купаж ASHOKA: 100% елітна Арабіка, вирощена в Південній Америці. Суміш зерен з кращих областей Бразилії і Карибського моря для справжніх цінителів якісної кави, який має характерний післясмак з нотками мигдалю, арахісу і солодких фруктів.",
    info: "",
    imgUrl: "/catalog/ashokaPod.webp",
    link: "",
  },
  {
    id: 20,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 100%, pod 44mm/50 pieces",
    name: "Finca Signature Dulce",
    state: "are_available",
    weight: 0.45,
    weight_box: 0.45,
    cost: 17.2,
    desc: "Середнє і оксамитове тіло. Середня кислинка супроводжується відтінками лісових ягід, полуниці та винною нотою. Вміст гіркоти відчувається в ноті карамелі, яка поступається місцем високому відчуттю солодкості, типовому для зневоднених слив.",
    info: "",
    imgUrl: "/catalog/dulcePod.webp",
    link: "",
  },
  {
    id: 21,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 100%, pod 44mm/50 pieces",
    name: "Finca La Victoria",
    state: "are_available",
    weight: 0.45,
    weight_box: 0.45,
    cost: 19.0,
    desc: "Помірна кислотність, характерна для солодких цитрусових. Низька присутність гіркоти. Переважає солодкуватий смак, підкреслений ароматами бісквіта, карамелі та патоки.",
    info: "",
    imgUrl: "/catalog/victoriaPod.webp",
    link: "",
  },
  {
    id: 22,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 100%, pod 44mm/50 pieces",
    name: "Finca Rio Colorado",
    state: "are_available",
    weight: 0.45,
    weight_box: 0.45,
    cost: 17.85,
    desc: "Помірна кислотність, невелика гірчинка, середньо-сильна солодкість. Тіло середній, м'який. Помірна присутність характерної для цитрусових кислинки з нотами рожевого грейпфрута. Слабка присутність гіркоти з нотами какао і карамелі. Аромати печива та коричневого цукру підкреслюють солодкість.",
    info: "",
    imgUrl: "/catalog/coloradoPod.webp",
    link: "",
  },
  {
    id: 23,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 70% / Robusta 30%, pod 44mm/50 pieces",
    name: "L'Ambra",
    state: "are_available",
    weight: 0.45,
    weight_box: 0.45,
    cost: 13.4,
    desc: "Aромат характеризується темним шоколадом, мигдалем і фруктовістю. Кава середньої густоти, оксамитова. Злегка кисла, в міру солодка, в міру гірка кава.",
    info: "",
    imgUrl: "/catalog/ambraPod.webp",
    link: "",
  },
  {
    id: 24,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 70% / Robusta 30%, pod 38mm/100 pieces",
    name: "L'Ambra",
    state: "are_available",
    weight: 0.7,
    weight_box: 0.7,
    cost: 13.5,
    desc: "Aромат характеризується темним шоколадом, мигдалем і фруктовістю. Кава середньої густоти, оксамитова. Злегка кисла, в міру солодка, в міру гірка кава.",
    info: "",
    imgUrl: "/catalog/ambra38Pod.webp",
    link: "",
  },
  {
    id: 25,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 30% / Robusta 70%, pod 38mm/100 pieces",
    name: "Il Viola",
    state: "are_available",
    weight: 0.7,
    weight_box: 0.7,
    cost: 23.8,
    desc: "Приємне поєднання 30% кави бразильської арабіки та 70% кави робусти з Індії та Африки. Еспрессо буде густа як сироп з переважанням гіркого, помірно солодкого смаку. Не кисла кава. Смаки, які можна виявити в його ароматі: сушений полин, какао, підсмажене зерно, амаретто.",
    info: "",
    imgUrl: "/catalog/viola38Pod.webp",
    link: "",
  },
  {
    id: 26,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 100%, pod 38mm/50 pieces",
    name: "Luxury Blend",
    state: "are_available",
    weight: 0.35,
    weight_box: 0.35,
    cost: 16.8,
    desc: "Купаж ASHOKA: 100% елітна Арабіка, вирощена в Південній Америці. Суміш зерен з кращих областей Бразилії і Карибського моря для справжніх цінителів якісної кави, який має характерний післясмак з нотками мигдалю, арахісу і солодких фруктів.",
    info: "",
    imgUrl: "/catalog/luxury38Pod.webp",
    link: "",
  },
  {
    id: 27,
    category: "coffee",
    type_of_coffee: "monodoses",
    sort: "Arabica 65% / Robusta 35%, pod 38mm/50 pieces",
    name: "Il Celeste",
    state: "are_available",
    weight: 0.35,
    weight_box: 0.35,
    cost: 14.3,
    desc: "Це приємна насичена кава без кофеїну, виготовлена   з 65% кавових зерен арабіки та 35% робусти.В його ароматы відзначається какао, темний шоколад і злегка фруктовий пряний смак.Крім легкої кислинки і середньої гіркоти, в смаку з'являється і солодкість. Також чудово підходить для приготування кавових напоїв без кофеїну на основі молока.",
    info: "",
    imgUrl: "/catalog/celeste38Pod.webp",
    link: "",
  },
  {
    id: 28,
    category: "coffee",
    type_of_coffee: "nespresso",
    sort: "Arabica 100%, pod 38mm/50 pieces",
    name: "Luxury Blend Nespresso",
    state: "are_available",
    weight: 0.55,
    weight_box: 0.55,
    cost: 15.3,
    desc: "Купаж ASHOKA: 100% елітна Арабіка, вирощена в Південній Америці. Суміш зерен з кращих областей Бразилії і Карибського моря для справжніх цінителів якісної кави, який має характерний післясмак з нотками мигдалю, арахісу і солодких фруктів.",
    info: "",
    imgUrl: "/catalog/luxoryBlendNespresso38Pod.webp",
    link: "",
  },
  {
    id: 29,
    category: "coffee",
    type_of_coffee: "nespresso",
    sort: "Arabica 100%, pod 38mm/50 pieces",
    name: "Rio Colorado Specialty Nespresso",
    state: "are_available",
    weight: 0.55,
    weight_box: 0.55,
    cost: 17.0,
    desc: "Помірна кислотність, невелика гірчинка, середньо-сильна солодкість. Тіло середній, м'який. Помірна присутність характерної для цитрусових кислинки з нотами рожевого грейпфрута. Слабка присутність гіркоти з нотами какао і карамелі. Аромати печива та коричневого цукру підкреслюють солодкість.",
    info: "",
    imgUrl: "/catalog/rioColoradoNespresso38Pod.webp",
    link: "",
  },
  {
    id: 30,
    category: "coffee",
    type_of_coffee: "nespresso",
    sort: "Arabica 70% / Robusta 30%, pod 38mm/50 pieces",
    name: "Le Percentuale Vellutato Nespresso",
    state: "are_available",
    weight: 0.55,
    weight_box: 0.55,
    cost: 13.5,
    desc: "Середнє і оксамитове тіло. Середня кислинка супроводжується квітковими нотками аромату. Вміст гіркоти дає простір для високого відчуття солодкості, характерного для стиглих фруктів і шоколаду. В кінці характерні бальзамічні ароматні ноти.",
    info: "",
    imgUrl: "/catalog/velutato.webp",
    link: "",
  },
  {
    id: 31,
    category: "coffee",
    type_of_coffee: "nespresso",
    sort: "Arabica 50% / Robusta 50%, pod 38mm/50 pieces",
    name: "Le Percentuale Fragrante Nespresso",
    state: "are_available",
    weight: 0.55,
    weight_box: 0.55,
    cost: 13.4,
    desc: "Середнє і оксамитове тіло. Середня кислинка супроводжується квітковими нотками аромату. Вміст гіркоти дає простір для високого відчуття солодкості, характерного для стиглих фруктів і шоколаду. В кінці характерні бальзамічні ароматні ноти.",
    info: "",
    imgUrl: "/catalog/fragantePod.webp",
    link: "",
  },
  {
    id: 31,
    category: "coffee",
    type_of_coffee: "nespresso",
    sort: "Arabica 20% / Robusta 80%, pod 38mm/50 pieces",
    name: "Le Percentuale Intenso Nespresso",
    state: "are_available",
    weight: 0.55,
    weight_box: 0.55,
    cost: 13.2,
    desc: "Завдяки сильній інтенсивності та тілу ця кава не залишає місця для «легкості». Бразильська арабіка додає присмак какао, центральноафриканська робуста додає рецепту насиченості та щільності, а індійська робуста підкреслює приємні, шоколадні нотки.",
    info: "",
    imgUrl: "/catalog/fraganteNespresso.webp",
    link: "",
  },
] as unknown as ProductCardInterface[];
