# Meet friends  

### TL;DR  
Ссылка на [интерактивный макет](https://mementomorri.github.io/CS_graduatiom_project/)  

## Мотивационное обоснование к появлению проекта

Теория игр – это область знаний, изучающая подходы к взаимодействию экономических агентов, с целью получения наиболее желаемого результата для этих экономических агентов, где результат не всегда был прогнозируемым или преднамеренным решением одной из сторон.\
Наиболее желаемый, для одного экономического агента, результат не всегда является наиболее оптимальным для большинства и всех сторон в долгосрочной перспективе, но он может, является наиболее выгодным для всех в текущий момент. Однако, не всё так просто как может показаться на первый взгляд, у каждого экономического агента есть своя шкала желательности того или иного результата, каждый конкретный результат не является нулем или единицей, у результатов игры есть более тонкая шкала оценивания, шкала предпочтения и ценности. Именно с такой мыслью я подхожу к разработке моего сервиса, голосование должно учитывать чуть больше факторов и быть всеобъемлющим, чем простой выбор одного варианта и отказ от других.\ 
Бинарные решения в виде нулей и единиц не всегда приводят к удовлетворительному результату.  Например, это происходит в политике, когда в президентских выборах побеждает кандидат, за которого отдано большинство голосов, но не отдано предпочтение большинства избирателей, или в житейских голосованиях, когда нужно выбрать дату и место встречи с большим коллективом, но большинство растворяется в выборе. Можно учесть мнение каждого участника голосования и это главный плюс демократического голосования, а также её главный минус, каждый имеет одинаковый вес в голосовании, но это не всегда правильно. Например, когда в голосовании за выбор ежегодной даты встречи выпускников участвуют и те, кто не часто приходят на эти встречи. Их голос имеет одинаковый вес с другими участниками, они всегда голосуют, даже если они понимают, что не пойдут на эту встречу их голос имеет такой же вес, как например вес организатора, без которого провести встречу не получится вообще.\ 
Эти и другие факторы должны учитываться при формировании правильного, наиболее выгодного решения.

## Проектирование 

### Диаграмма использования

Первым шагом к проектированию нашего сервиса является разработка  «диаграммы использования» или «use case diagram», диаграмма использования демонстрирует набор пользователей, примеров их взаимодействия с описываемой системой и ситуации такого взаимодействия. Результат разработки такой диаграммы представлен на рисунке. 

![](https://github.com/mementomorri/comp_science_graduatiom_project/blob/master/images/readme_pics/usecaseDiagram.png)

В данном случае, представленная диаграмма использования в процессе взаимодействия пользователя с системой, ситуация описывающая возможности пользователей по воздействию на систему через проектируемый интерфейс. Как видно из диаграммы, у нас есть обобщенный класс прародитель «Пользователь», который является репрезентацией обычного пользователя нашего сервиса решившего воспользоваться системой. Более специализированным вариантам класса «Пользователь», по отношению к системе будет являться «Владелец доски» или как его можно назвать иначе «Модератор голосования» и «Участник голосования». Первый это владелец условной доски, организатор голосования, имеющий все права для манипулирования конфигурацией голосованием, а второй это обычный участник голосования, принимающий непосредственное участие. Описанный «Пользователь» является зарегистрированным  пользователем системы, также существуют и не зарегистрированные пользователи, которые получили приглашение на голосование, они могут только наблюдать результат голосования. Как показано на диаграмме организатор может изменять такие параметры как:
* название и описание доски, изменяя этот параметр, организатор может кратко сформулировать тему голосования или дать название событию, а в описании более подробно и развернуто описать почему, например, нужно принять участие, более подробно объяснить, что будет означать результат и призвать помочь;
* возможность добавлять решения и самому отдать свой голос любому варианту;
* важность участников, рано или поздно мы столкнемся с проблемой важности участников, иногда есть ключевые фигуры в том или ином событии. Например, иногда невозможно провести совещание, если место проведения совещания это офис, принадлежащий одному из участников голосования и при выборе даты проведения совещания его мнение будет немного важнее мнения остальных. В такой ситуации, организатор просто может не открыть двери офиса в выбранный день и тогда совещание отменяется, это можно отрегулировать, задав ему больший вес, нежели остальным, но это остается на усмотрение организатора;
* крайний срок принятия решения, время жизни голосования его можно задать или оставить пустым, но как правило, если человек видит крайний срок, то он более склонен к скорейшему принятию решения, нежели к его растягиванию до последнего момента.
Далее обычный участник голосования, он имеет следующие возможности:
* отдать свой голос за один из вариантов решения в формате «желательно», «приемлемо», «нежелательно»;
* предложить свой вариант решения какой-то проблемы или предложить другую дату проведения мероприятия.
На этом участники голосования заканчиваются, внешние пользователи могут лишь отслеживать результат. Диаграммы относительно новых пользователей, привлекаемых к использованию сервиса это довольно шаблонный вариант диаграммы использования, где новый пользователь посещает веб-ресурс, оставляет регистрационные данные и переходит к использованию систему. Можно долго разбирать подробности такой диаграммы, но поскольку это шаблонная диаграмма не вижу причины задерживаться на этом.

### Диаграмма последовательнослей

Перейдем к «диаграмме последовательностей» или «sequence diagram». Вкратце, диаграмма последовательностей это диаграмма последовательности действий. Из названия диаграммы понятно, что эта диаграмма отображает какую-то последовательность, которая является последовательностью сообщений направленных от одного объекта к другому. Взаимодействие между компонентами очень важно с точки зрения исполнения и запуска проекта. Диаграмма последовательности визуализирует последовательность вызовов в системе для выполнения определенной части функционала системы. Результат построения диаграммы последовательностей представлен на рисунке.

![](https://github.com/mementomorri/comp_science_graduatiom_project/blob/master/images/readme_pics/create_board.png)

Как видно из диаграммы, при организации новой доски абстрактному пользователю необходимо обратиться к нашему сервису, нажать соответствующую кнопку в пользовательском интерфейсе и посредствам пользовательского интерфейса сконфигурировать начальные параметры, а далее по средствам вызовов в программном интерфейсе мы создадим новую доску в массиве досок. Когда другие пользователи получают приглашение, они делают запрос к массиву и достают оттуда нужный элемент в виде конкретной доски, в котором хранятся раннее регламентированные данные и параметры, заданные организатором, а затем начинается голосование.

### Диаграмма классов

Перейдем к самой наиболее важной диаграмме, «диаграмме классов» или «class diagram», диаграмма классов является статичным преставлением классов данных используемых в программном продукте, в ней нет последовательности действий или какого-то взаимодействия между элементами. Диаграмма классов нужна не только для визуализации, описания или документирования различных аспектов программной системы, но и для конструирования исполняемого кода. Диаграмма классов описывает атрибуты и операции над классами, а также ограничения, наложенные на систему в целом. Диаграммы классов широко используются в объектно-ориентированном подходе, потому что это единственный тип диаграммы, который можно напрямую использовать при трансформации диаграммы в объектно-ориентированный код соответствующего языка программирования. Существует даже набор утилит для транслирования кода UML в исходный код, например, «UML Designer» для трансляции кода UML в Java и обратно. Разработаем диаграмму классов для нашего проекта, рисунок.

![](https://github.com/mementomorri/comp_science_graduatiom_project/blob/master/images/readme_pics/backend_classes.png)

В моем случае имеются следующие основные классы данных:
* Board, это класс, представляющий собой хранилище голосов и участников голосования, уславно названный "доска". Этот класс будет хранить динамический список участников в виде списка строк "members", коэффициент важности участника в диапазоне от 0 до 1, "membersWeights". Голоса участников хранятся в виде списка "votes";
* User, это класс, являющийся репрезентацией модели пользователя и его контактных данных;
* UserVote это тип данных нужный для записи решений в виде списка, поле "decision" имеет тип данных список строк формата: "decisionID:weight".
Это основные типы данных, используемые в проекте, второстепенные классы данных будут рассмотрены далее по мере необходимости и написания исходного кода. Спроектированы две главные составляющие любого сервиса. Динамическая часть, в виде диаграммы использования и диаграммы последовательностей, а также статическая часть, в виде диаграммы классов, таким образом, демонстрируя суть проекта в важнейших его аспектах.

## Дизайн UI

В идеале распределить время разработки между дизайном и кодом примерно 50/50 и периодически возвращаться к уже принятым решениям, пересматривать их или с течением времени взглянуть на них иначе, возможно придумать более качественную визуализацию элемента системы и примерить на макете. Этот подход напоминает цикл разработки программного обеспечения, но как я и упоминал раннее, дизайн UI это относительно свежая ветвь деятельности человека, поэтому строгой последовательности действий или правил пока не описано. Однако, при разработки UI нужно придерживаться следующих принципов выведенных путем совершенствования на практике:
* иерархичность визуальных элементов;
* прикладная составляющая элементов, их применяемость в других местах проекта, повторное использование элементов UI;
* типографическая составляющая, шрифты, размер текста, ширина текста и его положение на экране, стандартизация атомарных элементов.

Это основные принципы используемые при разработке пользовательского интерфейса, не менее важным также является понимание того каким хочет видеть пользовательский интерфейс конечный пользователь, для этого нужно согласовывать важные дизайнерские решения с руководителем проекта и консультироваться с потребителями конечного продукта, отчасти поэтому разработка дизайна такая поглощающая деятельность. Условно можно разделить этапы разработки UI на шесть этапов:
* «sketching», разработка набросков, неважно нарисованы они на бумаге или в электронном виде, но это самый простой способ показать другим свое видение и быстро реализовать его без потери драгоценного времени. Здесь мы применяем грубые наброски без цветовой схемы или тонкого размещения элементов на экране;
* «wireframing», разработка поверхностных макетов, этот этап показывает как элементы интерфейса будут выглядеть до того как визуализировать дизайн, на этом этапе начинает применяться размещение объектов на странице, а элементы принимают форму как правило без наполнения и применения цветовой схемы;
* «components», разработка постоянных состояний и условий отображения атомарных элементов в интерфейсе. На этом этапе решается, будет ли интерфейс статичным, например, отображение какого-нибудь документа или вывод графической информации на сайте визитке. На этом этапе задается цветовая схема, типографическая сторона интерфейса и разработка атомарных элементов как кнопки, таблицы, ссылки и т.д. Задается изменение оформления при нажатии какой-либо кнопки или изменении внутреннего состояния сервиса;
* «user and task flows», адаптация отображаемой на экране модели проектируемой системы с видением и интуитивностью расположения элементов для конечного пользователя системы, а также проектирование сценариев отображения и ответной реакции со стороны системы на действия пользователя. На этом этапе отображается последовательность «экранов» программного продукта, если речь о настольном ПО или страниц веб сайта, если речь идет о веб сервисе;
* «mock-ups», разработка макета таким, каким он должен выглядеть, в конечном счете, суммируя прошлые этапы, опираясь на принятые решения и выбор атомарных элементов необходимо нарисовать макет программного продукта. На этом этапе все элементы расставляются на экране «пиксель в пиксель», рисуются разделительные столбцы для bootstrap и расставляются в соответствии с принятой ранее шириной элементов на экране. Уже на этом этапе можно показать законченный дизайн клиенту или руководителю проекта;
*  «prototype» разработка прототипа, модель имитирующая созданный дизайн, цель этого этапа симуляция рабочего продукта, убедиться, что всё выглядит и работает так, как нужно, до того как всё пойдет в разработку. Этот этап можно охарактеризовать такими терминами  из индустрии ИТ как «no code product» или «pre code product». Реализовать такую модель можно с помощью таких инструментов как «invision» или «Figma», о ней речь пойдет дальше.
Напомню, что это условные этапы разработки дизайна и часто приходится перескакивать от одного этапа разработки к другому, это во многом зависит от крайних сроков и выделенного бюджета. Но понимание этапов очень полезно для понимания того на каком этапе разработки мы находимся в данный момент и куда двигаться дальше.

## Макет в Figma

На текущий момент разработки проекта пройдены все этапы разработки дизайна вплоть до разработки макета, согласование элементов дизайна, цветовая схема и типографическая составляющая были успешно обсуждены. Данная работа больше освещает ту сторону проекта, которая касается кода и использования технологий, поэтому я пропущу подробности создания набросков, поверхностных макетов, атомарных компонентов и так далее по процессу создания дизайна, а вместо этого сразу перейду к самому интересному, к готовому макету, реализованному внутри редактора векторной графики Figma.\
Наглядный результат работы, который можно посмотреть на платформе Figma, доступен по [ссылке: ](https://www.figma.com/file/QOK88NH8a2MZByFyGe332V/Meet-friends?node-id=0%3A1.)

## Интерактивный макет

В результате разработки был получен [интерактивный макет](https://mementomorri.github.io/CS_graduatiom_project/), который размешен с помощью github-pages.

## Заключение

В ходе выполнения проекта были рассмотрены инструменты разработки веб-приложений "с нуля", позволяющие структурировано подойти к разработке используя современные методы разработки. Изучен векторный редактор Figma и реализованы основные этапы разработки дизайна, изучен язык разметки UML и спроектирована логика работы сервиса, изучены такие инструменты как Bootstrap и jQuery, которые позволили разработать современный, адаптивный веб-интерфейс.\
На первой стадии разработки программного обеспечения были рассмотрены вопросы, связанные с теоретической основой голосования и применением теории игр, при проведении голосования. Были рассмотрены основные подходы к реализации голосования с применением таким подходов как «рейтинговое голосование», «метод марок», «система» Кэррола» и разработан гибридный подход удовлетворяющий требованиям средней группы участников.\
Для отладки кода клиентской части: подпрограмм и функций также была использована среда разработки с открытым исходным кодом Atom.\
Результатом работы является веб-сервис, содержащий реализацию гибридного подхода в проведении голосования. С помощью него можно проводить голосования среднего и малого масштаба, чтобы принять решения внутри малого круга лиц или небольшой организации. Сервис не только позволяет пользователю принять решение, но и отслеживать уже принятые, чтобы сформировать новые варианты голосования и напомнить о результате. В качестве доработки сервиса можно разработать требования к серверной части сервиса, сформировать их в виде документации и разработать серверную часть проекта, что приведет его в состоние готовое к использованию конечным пользователем.
