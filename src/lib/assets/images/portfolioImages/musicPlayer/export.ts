import ImageSource from "$lib/models/ImageSource"; 
import AudioPlayerImage from "$lib/assets/images/portfolioImages/musicPlayer/audio_player.jpg"; 
import PlaylistList from "$lib/assets/images/portfolioImages/musicPlayer/playlist_list.jpg"; 
import PlaylistPage from "$lib/assets/images/portfolioImages/musicPlayer/playlist_page.jpg"; 
import Search from "$lib/assets/images/portfolioImages/musicPlayer/search.jpg"; 
import SearchResults from "$lib/assets/images/portfolioImages/musicPlayer/search_results.jpg"; 
import Settings from "$lib/assets/images/portfolioImages/musicPlayer/settings.jpg"; 
import SongListDrag from "$lib/assets/images/portfolioImages/musicPlayer/song_list_drag.jpg"; 
import SongMoreOptions from "$lib/assets/images/portfolioImages/musicPlayer/song_more_options.jpg"; 
import AddToPlaylist from "$lib/assets/images/portfolioImages/musicPlayer/add_to_playlist.jpg"; 

export const musicPlayerImages: ImageSource[] = [
    new ImageSource(
        AudioPlayerImage, 
        "Audio Player Image"
    ), 
    new ImageSource(
        PlaylistList, 
        "Playlist List"
    ), 
    new ImageSource(
        PlaylistPage, 
        "Playlist Page"
    ), 
    new ImageSource(
        SearchResults, 
        "Search Results"
    ), 
    new ImageSource(
        Settings, 
        "Settings"
    ), 
    new ImageSource(
        SongListDrag, 
        "Song List Drag"
    ), 
    new ImageSource(
        SongMoreOptions, 
        "Song More Options"
    ), 
    new ImageSource(
        AddToPlaylist, 
        "Add To Playlist"
    ), 
]