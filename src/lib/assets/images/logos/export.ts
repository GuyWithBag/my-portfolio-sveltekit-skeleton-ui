import ImageSource from "$lib/models/ImageSource";

export const logos: Map<String, ImageSource> = new Map<String, ImageSource>(Object.entries({
        Godot: new ImageSource(
            "src/lib/assets/images/logos/godot.svg", 
            "Godot Icon", 
            "Godot"
        ), 
        GDScript: new ImageSource(
            "src/lib/assets/images/logos/godot.svg", 
            "GDScript Icon", 
            "GDScript"
        ), 
        Flutter: new ImageSource(
            "src/lib/assets/images/logos/flutter.svg", 
            "Flutter Icon", 
            "Flutter"
        ), 
        Dart: new ImageSource(
            "src/lib/assets/images/logos/dart.svg", 
            "Dart Icon", 
            "Dart"
        ), 
        HiveDB: new ImageSource(
            "src/lib/assets/images/logos/hiveDB.png", 
            "HiveDB Icon", 
            "HiveDB"
        ), 
        GoogleAdMob: new ImageSource(
            "src/lib/assets/images/logos/googleAdMob.svg", 
            "GoogleAdMob Icon", 
            "AdMob"
        ), 

    })
)
