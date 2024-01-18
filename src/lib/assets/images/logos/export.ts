import ImageSource from "$lib/models/ImageSource";
import Godot from "$lib/assets/images/logos/godot.svg";
import Flutter from "$lib/assets/images/logos/flutter.svg";
import Dart from "$lib/assets/images/logos/dart.svg";
import HiveDB from "$lib/assets/images/logos/hiveDB.png";
import GoogleAdMob from "$lib/assets/images/logos/googleAdMob.svg";
import GithubMark from "$lib/assets/images/logos/githubMark.svg";
import React from '$lib/assets/images/logos/react.svg'
import Firebase from '$lib/assets/images/logos/firebase.svg'
import Zustand from '$lib/assets/images/logos/react-zustand.png'
import Formik from '$lib/assets/images/logos/formik.svg'
import TypeScript from '$lib/assets/images/logos/typescript.svg'
import ChakraUI from '$lib/assets/images/logos/chakra-ui.svg'
import TailWind from '$lib/assets/images/logos/tailwind.svg'
import Svelte from '$lib/assets/images/logos/svelte.svg'
import Next from '$lib/assets/images/logos/next-js.svg'
import Javascript from '$lib/assets/images/logos/javascript.svg'
import Python from '$lib/assets/images/logos/python.svg'
import SQL from '$lib/assets/images/logos/sql.svg'
import Java from '$lib/assets/images/logos/java.svg'
import CSharp from '$lib/assets/images/logos/csharp.svg'

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
    React: new ImageSource(
        React,
        "React Icon",
        "React"
    ),
    Firebase: new ImageSource(
        Firebase,
        "Firebase Icon",
        "Firebase"
    ),
    Formik: new ImageSource(
        Formik,
        "Formik Icon",
        "Formik"
    ),
    Zustand: new ImageSource(
        Zustand,
        "Zustand Icon",
        "Zustand"
    ),
    TypeScript: new ImageSource(
        TypeScript,
        "TypeScript Icon",
        "TypeScript"
    ),
    ChakraUI: new ImageSource(
        ChakraUI,
        "ChakraUI Icon",
        "ChakraUI"
    ),
    TailWind: new ImageSource(
        TailWind,
        "TailWind Icon",
        "TailWind"
    ),
    Svelte: new ImageSource(
        Svelte,
        "Svelte Icon",
        "Svelte"
    ),
    Next: new ImageSource(
        Next,
        "Next Icon",
        "Next"
    ),
    Javascript: new ImageSource(
        Javascript,
        "Javascript Icon",
        "Javascriptt"
    ),
    Python: new ImageSource(
        Python,
        "Python Icon",
        "Python"
    ),
    Java: new ImageSource(
        Java,
        "Java Icon",
        "Java"
    ),
    SQL: new ImageSource(
        SQL,
        "SQL Icon",
        "SQL"
    ),
    CSharp: new ImageSource(
        CSharp,
        "CSharp Icon",
        "CSharp"
    ),
})
)

