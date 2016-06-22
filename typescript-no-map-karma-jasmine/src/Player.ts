class Player {
    currentlyPlayingSong:Song;
    isPlaying:boolean;

    play(song:Song):void {
        this.currentlyPlayingSong = song;
        this.isPlaying = true;
    }

    pause():void {
        this.isPlaying = false;
    }

    resume():void {
        if (this.isPlaying) {
            throw new Error("song is already playing");
        }

        this.isPlaying = true;
    }

    makeFavorite() {
        this.currentlyPlayingSong.persistFavoriteStatus(true);
    }
}
