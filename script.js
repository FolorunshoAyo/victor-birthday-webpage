(function(){
    const overlayVideo = document.getElementById("overlay-video");
    const coverImage = document.querySelector(".coverImg");
    const techImage = document.querySelector(".gif-image-container img");

    coverImage.addEventListener("click", () => {
        overlayVideo.play();
    });

    //  HANDLERS FOR TAB SWITCHING
    function tabSwitching(){
        const tabLinks = document.getElementsByClassName("tab-link");
        let initialTabNo = 1;
        let initialContent = 1;

        const switchTab = (tabNo, parentEl) => {
            const getInitialEl = document.querySelector(".tab-link-" + initialTabNo);

            getInitialEl.classList.remove("active");
            parentEl.classList.add("active");

            if(tabNo === 2){
                setTimeout(() => {
                    techImage.classList.remove("animate__backInDown");
                    techImage.classList.add("animate__backInDown");
                }, 1000)
            }

            initialTabNo = tabNo;
        };

        const changeContent = contentNo => {
            const tabContentContainerEl = document.querySelector(".tabContentContainer");

            tabContentContainerEl.classList.remove("content" + initialContent);
            tabContentContainerEl.classList.add("content" + contentNo);

            initialContent = contentNo
        };

        Array.from(tabLinks).forEach(tabLink => {
            tabLink.addEventListener("click", (e) => {
                const parentEl = e.target.parentElement;
                const tabLinkClassID = parentEl.classList[1];
                const tabNo = Number(tabLinkClassID[tabLinkClassID.length - 1]);

                switch(tabNo){
                    case 1:
                        switchTab(1,parentEl);
                        setTimeout(() => {
                            changeContent(1);
                        }, 1000);
                    break;
                    case 2:
                        switchTab(2, parentEl);
                        setTimeout(() => {
                            changeContent(2);
                        }, 1000);
                    break;
                    case 3:
                        switchTab(3, parentEl);
                        setTimeout(() => {
                            changeContent(3);
                        }, 1000);
                    break;
                    default:
                        console.log("No more tabs");
                }
            });
        });
    }

    tabSwitching();
    //***********************************

    // VIDEO HANDLER
    function videoHandlers (){
        const firstSectionVideo = document.getElementById("first-section-video");
        const firstSectionVideoOverlay = document.querySelector(".play-pause-container");
        let noOfClicks = 0;

        firstSectionVideoOverlay.addEventListener("click", e => {
            if(noOfClicks == 1){
                firstSectionVideoOverlay.classList.remove("play");
                firstSectionVideo.pause();
                noOfClicks = 0;
                return;
            }
            firstSectionVideoOverlay.classList.add("play")
            firstSectionVideo.play();
            noOfClicks += 1;
        });
    };

    videoHandlers();
}())