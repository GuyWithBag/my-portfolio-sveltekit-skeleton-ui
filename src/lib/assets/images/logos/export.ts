import ImageSource from "$lib/models/ImageSource"; 
import Godot from "$lib/assets/images/logos/godot.svg"; 
import Flutter from "$lib/assets/images/logos/flutter.svg"; 
import Dart from "$lib/assets/images/logos/dart.svg"; 
import HiveDB from "$lib/assets/images/logos/hiveDB.png"; 
import GoogleAdMob from "$lib/assets/images/logos/googleAdMob.svg"; 
import GithubMark from "$lib/assets/images/logos/githubMark.svg";  

export const logos: Map<String, ImageSource> = new Map<String, ImageSource>(Object.entries({
        Godot: new ImageSource(
            Godot, 
            "Godot Icon", 
            "Godot"
        ), 
        GDScript: new ImageSource(
            Godot, 
            "GDScript Icon", 
            "GDScript"
        ), 
        Flutter: new ImageSource(
            Flutter, 
            "Flutter Icon", 
            "Flutter"
        ), 
        Dart: new ImageSource(
            Dart, 
            "Dart Icon", 
            "Dart"
        ), 
        HiveDB: new ImageSource(
            HiveDB, 
            "HiveDB Icon", 
            "HiveDB"
        ), 
        GoogleAdMob: new ImageSource(
            GoogleAdMob, 
            "GoogleAdMob Icon", 
            "AdMob"
        ), 
        GithubMark: new ImageSource(
            GithubMark, 
            "GithubMark Icon", 
            "GithubMark" 
        ), 

    })
)
