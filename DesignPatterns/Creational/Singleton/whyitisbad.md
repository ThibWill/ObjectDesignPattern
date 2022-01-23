# Pourquoi singleton est mauvais (antipattern)

- Pas évolutif.

Le plus gros problème avec le patron singleton (et la raison pour laquelle il s'agit, par conséquent, d'un anti-pattern de conception plutôt que d'un patron de conception) est que l'hypothèse qu'il n'y aura jamais qu'une seule instance est souvent brisée au cours de la vie d'un projet, et ce patron structure le code d'une manière qui nécessite un effort très important de remaniement lorsque cette hypothèse est inévitablement fausse.

- Trop dur à tester.

En plus de rendre le code inflexible, le modèle singleton rend également très difficile le test du code. En effet, le modèle singleton introduit une dépendance par le biais d'un canal latéral qui n'est pas explicitement donné en paramètre aux constructeurs ou aux autres fonctions qui l'utilisent. Même dans le cas où ce canal latéral peut être remplacé (ce qui est souvent très difficile à faire), la nécessité de le faire est moins évidente et rend les tests très difficiles à comprendre. 

- Multi Threading impossible.

Le modèle singleton est particulièrement difficile à mettre en œuvre correctement lorsqu'on prend en compte le multithreading (bien que ce soit plus un cas d'utilisation d'une bibliothèque pour mettre en œuvre le modèle lorsqu'on utilise le modèle plutôt qu'un cas pour l'éviter). Cependant, le fait de déplacer la propriété singleton en dehors de l'objet permet de créer des implémentations alternatives, dont certaines sont thread-safe et d'autres non, ce qui permet aux applications qui ne sont pas multithreading d'instancier une version de l'objet qui n'a pas la surcharge de la synchronisation des threads tout en permettant aux applications multithreading d'instancier la version thread-safe. 

Viole le Principe de Responsabilité Unique.

Plus d'explications https://www.michaelsafyan.com/tech/design/patterns/singleton

Traduit avec www.DeepL.com/Translator (version gratuite)