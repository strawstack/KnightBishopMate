(() => {

    //console.log("hello");

})();

function nav(kingWhite, bishopWhite, boardSide) {
    const root = "https://lichess.org/editor/";
    const lookup = {
        true: { // King white
            true: [ // Bishop White
                "3KBN2/8/8/8/3k4/8/8/8_w_-_-_0_1?color=white", // Top
                "8/8/7K/7B/3k3N/8/8/8_w_-_-_0_1?color=white", // Right
                "8/8/8/3k4/8/8/8/4KBN1_w_-_-_0_1?color=white", // Bottom
                "8/8/8/K7/B3k3/N7/8/8_w_-_-_0_1?color=white"  // Left
            ],
            false: [
                "3KNB2/8/8/8/3k4/8/8/8_w_-_-_0_1?color=white",
                "8/8/8/7N/3k3B/7K/8/8_w_-_-_0_1?color=white",
                "8/8/8/3k4/8/8/8/3KBN2_w_-_-_0_1?color=white",
                "8/8/8/K3k3/N7/B7/8/8_w_-_-_0_1?color=white"
            ]
        },
        false: { // King black
            true: [ // Bishop White
                "3kbn2/8/8/8/3K4/8/8/8_b_-_-_0_1?color=black",
                "8/8/7k/7b/3K3n/8/8/8_b_-_-_0_1?color=black",
                "8/8/8/3K4/8/8/8/3bkn2_b_-_-_0_1?color=black",
                "8/8/b7/n7/k3K3/8/8/8_b_-_-_0_1?color=black"
            ],
            false: [
                "2nbk3/8/8/8/4K3/8/8/8_b_-_-_0_1?color=black",
                "8/8/8/3K3n/7b/7k/8/8_b_-_-_0_1?color=black",
                "8/8/8/8/4K3/8/8/3nbk2_b_-_-_0_1?color=black",
                "8/8/8/b7/n2K4/k7/8/8_b_-_-_0_1?color=black"
            ]
        }
    };

    let targetUrl = `${root}${lookup[kingWhite][bishopWhite][boardSide]}`;
    window.open(targetUrl, '_blank');
}

function randomNav() {
    const kingWhite   = (Math.random() < 0.5) ? true : false;
    const bishopWhite = (Math.random() < 0.5) ? true : false;
    const boardSide   = Math.floor(Math.random() * 4);
    nav(kingWhite, bishopWhite, boardSide);
}