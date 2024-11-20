 <script type="text/javascript" src="lodash.js"></script>
    <script type="text/javascript" src="butterchurn.js"></script>
    <script type="text/javascript" src="butterchurnPresets.min.js"></script>
    <script type="text/javascript" src="butterchurn-presets/lib/butterchurnPresetsExtra.min.js"></script>
    <script>
        console.log('Butterchurn loaded:', typeof butterchurn !== 'undefined');
        
        const audioTracks = [
"files/aud/0AA968CC9BD87190A5B9B68B785D2279.mp3", 
"files/aud/0ABFAF89FA92B3BB033896DE4E7FCA0D.mp3", 
"files/aud/0DDE9002290A4E4B24ED7A3762742882.mp3", 
"files/aud/0FC3589586CCC0BF1801003DA500D379.mp3", 
"files/aud/1AE89282F333F68DE3E6E1E060267354.mp3", 
"files/aud/2A46CD871B3981D295AEC54A89510D1B.mp3", 
"files/aud/2AA6F4B8AB6BB06453130DF8CBA94DA2.mp3", 
"files/aud/2AE5178DB148A0BC8B526AF58DC01CE1.mp3", 
"files/aud/2FA5970034ACE456608F2F131D294997.mp3", 
"files/aud/3BF8831733B842D93AE7D3AC005914AF.mp3", 
"files/aud/3DC04F68AA24852F850E99253C107C87.mp3", 
"files/aud/3E6ABE35DF44BD5379A027B14611B892.mp3", 
"files/aud/03E3691536C6BA48AF8DFCC98E2F86B5.mp3", 
"files/aud/3F53B00F9D7C777C854B87DF0DBE8763.mp3", 
"files/aud/4ABE709D3D395A34A5BEABB3DD9502C5.mp3", 
"files/aud/4B728F3BB5865F52379DADAA48C05A6B.mp3", 
"files/aud/4C7F53B035D9C03BA0ECEF1384815D66.mp3", 
"files/aud/4DEB3179BC24D20C751AC18E9701A89F.mp3", 
"files/aud/4F9087DF4AF056BE34FAC03C5AF429DD.mp3", 
"files/aud/6ADD2F809E6430AFD07C77642ABCB0F1.mp3", 
"files/aud/6E1B9287B01F96CFBD0695F8FF817A3B.mp3", 
"files/aud/7B1B519AF556B05F264968E28F6F0216.mp3", 
"files/aud/7BE3A354CA509ACF10C8E3DD66C0083D.mp3", 
"files/aud/7D0115E171D0091A56726E3A8B48B20F.mp3", 
"files/aud/07DEB83DB6B0B0A8D8D68A8E59997FBE.mp3", 
"files/aud/7FF2C0B5099003B7B5A33DFF3C6CF173.mp3", 
"files/aud/08AD2547744653E97D82E9C817DE5743.mp3", 
"files/aud/8E4D1BC45A0BCC05E87D9C36A8E79920.mp3", 
"files/aud/9BEBE2CEE7580C18835DE13E3076C8AC.mp3", 
"files/aud/9D6AF0426F8C4A4E2BF7ADC86098739B.mp3", 
"files/aud/9F1540711B6930B1192C45480087020F.mp3", 
"files/aud/16D2D7DDC50EEA8DE22BC558FE94CA7C.mp3", 
"files/aud/18BE5DD7A3F6377EFBFC17C69B9B2D01.mp3", 
"files/aud/27A1B7EAFD0C4E57E3C40768BB650D9F.mp3", 
"files/aud/27E4BEA66F762A27DE57848805EE54C7.mp3", 
"files/aud/27F631709AB5D4B98EFEB2F2123B480E.mp3", 
"files/aud/33A5872F03C9054F4CEEA4AA4DBF521B.mp3", 
"files/aud/33B7DD40813B21DD0EA08BBE9BF922A3.mp3", 
"files/aud/35B0A8FA3022F14B19593E81836B46F9.mp3", 
"files/aud/36CE8795F7535025C147D1AE2E7BC797.mp3", 
"files/aud/36F828D41D92B132B01A9040EE5F4BD8.mp3", 
"files/aud/39AAC690F5D2A33F910EEFCD1F45DECC.mp3", 
"files/aud/39E0EE37FA1E5C181E12A468DE1FCBF3.mp3", 
"files/aud/44D0F06CA9A7920591A56CEB9357BE93.mp3", 
"files/aud/45DDCD3C199CEE7B7895CE42B005AF7E.mp3", 
"files/aud/45DE0E0F869545D7ACCC5962F37EC4ED.mp3", 
"files/aud/45F757303B512D0F5F8FE7F4A45301A4.mp3", 
"files/aud/46DE77E391118E57584A1DA6E9958D26.mp3", 
"files/aud/50B13137C26D06A5BDE0E3949508A48B.mp3", 
"files/aud/57CD756692E1C3D8EC7D58D0561F4D57.mp3", 
"files/aud/58B5AD1EBFAC1AC6D5C89D7601658BAD.mp3", 
"files/aud/064EBB45E969268D1D565945FD30349E.mp3", 
"files/aud/66CF005781CC5028B7EAA90E6473944A.mp3", 
"files/aud/69E8FAAD90E6D164367FF0A4B338EA72.mp3", 
"files/aud/71BDD33125193A99F82CAE0E36C4DB9A.mp3", 
"files/aud/86A0763644FADACCD0ACE940FDC857A9.mp3", 
"files/aud/87D11F507509CDCD6510E9B4EB36D766.mp3", 
"files/aud/92CA78BF53C61B648E29C7BDDE5B87D3.mp3", 
"files/aud/97BEBB8CF7A87669D088FFEB5716E5BC.mp3", 
"files/aud/247EE96D14D10CA14943FA7E4EEED939.mp3", 
"files/aud/310EE418F2292D7FD44699BFA2268F64.mp3", 
"files/aud/317D2E7B4AC8260CC6C619AC1FF3608C.mp3", 
"files/aud/318B51064AFC6C0670AD1763E03AD8F0.mp3", 
"files/aud/383D1BE8FB94587FB5E78769FFA91920.mp3", 
"files/aud/580BF7E11A76214A6EC18D19E8999358.mp3", 
"files/aud/592DF673F62D2DB2739ACAD11CB4EE21.mp3", 
"files/aud/606A2DDFC6009B4BBA8EC1F5CFA59F58.mp3", 
"files/aud/798D5D4408E516A2BC2448FD17B04133.mp3", 
"files/aud/852B5DD09E041D31A9BAD05DE613B0D3.mp3", 
"files/aud/894E931B2B56F0C9376E163D2F75F729.mp3", 
"files/aud/950B4C997A71FCB7277210530A0E3FA3.mp3", 
"files/aud/986C35305171DCF5A5C5FD9C7EBD53CA.mp3", 
"files/aud/3602C77742718963398198A053F611ED.mp3", 
"files/aud/5073A74FCB39AD8C70E05761DC0C5D4A.mp3", 
"files/aud/5978BEEB0C05AB4BB95EF6D516582E7E.mp3", 
"files/aud/8945F0A3756272267754771554554B34.mp3", 
"files/aud/9607A8A32512A63B537219951FF54E01.mp3", 
"files/aud/11087AC44773380786D4C743B9A16255.mp3", 
"files/aud/17928CB3FCBF55F83A4A8357997CFD86.mp3", 
"files/aud/18487DFF8C4C2634163E432841DB0465.mp3", 
"files/aud/20866A99F01106A03D3233F9C05D95A9.mp3", 
"files/aud/29673E60F28FEE11FDEF7CFD0649B322.mp3", 
"files/aud/41620FFDDC404A9962F4FCBD731629DE.mp3", 
"files/aud/49451AF9739EA82CA89B82DA9813F664.mp3", 
"files/aud/68351EAB435ECCD04176CE819578B4F8.mp3", 
"files/aud/84027A903956724A5651D39835072C18.mp3", 
"files/aud/98752B0343A31FB430B5801A29109D11.mp3", 
"files/aud/243298B4071340A943CB0E7D017EA6C9.mp3", 
"files/aud/0483134AF52BA2620ACEBB15DB3A915C.mp3", 
"files/aud/536145E15D9D84BC8DA695A54BD7AADF.mp3", 
"files/aud/658119A498E107B76B899DB21BEDEE39.mp3", 
"files/aud/4918199D0DD98EA88A451374A35FF02E.mp3", 
"files/aud/5304069DE9E031CBFFCF66988EAEF9A5.mp3", 
"files/aud/6079450EC8B657B581FFAD9E6ED59805.mp3", 
"files/aud/6463294F3707080DE8A0017E5405C1DC.mp3", 
"files/aud/26980531EFFFF7ABD7AFDFE810F0FD82.mp3", 
"files/aud/A16EAA32BE2AFAC1ADFE0610990BEFF1.mp3", 
"files/aud/A582DC5DD937E6DC0467BA640F20ADE9.mp3", 
"files/aud/A441328B6F4C0EB0119F4F3D7497A002.mp3", 
"files/aud/A4201865185110C75FD3FCF5DB4EF6C5.mp3", 
"files/aud/ABAF59CC8FE88766AE1A09408BB8E0E6.mp3", 
"files/aud/ACEE449D4A3802F6B6CA78323DE93F81.mp3", 
"files/aud/AD5EAB71FC2017FDD3D4CB0BB127637D.mp3", 
"files/aud/AF7B79C1ED865E92E6F00DE6D043B72B.mp3", 
"files/aud/B1B6C3D02B454C96C26497A7021F2B38.mp3", 
"files/aud/B1D9EF2694B6B789FFD09529FF5DCA66.mp3", 
"files/aud/B06E0D03F4A18158C1A0A49C765DB3F4.mp3", 
"files/aud/B9CF83C6B45D311908F303B6F8847BC8.mp3", 
"files/aud/B53CA04AE89538F8DA6D4304C27631C1.mp3", 
"files/aud/B834C893DC001DEDD88F98388BE98240.mp3", 
"files/aud/B07202F69BAF3D0B6A393851400FE363.mp3", 
"files/aud/B7653D0543717E91971119FF899358A6.mp3", 
"files/aud/B55448D07B81CEB64624EDDE9D0C09B3.mp3", 
"files/aud/B25914335C15F242C4848CFD373F5108.mp3", 
"files/aud/BB4C7A5591802B4A22F8C48610B55D9E.mp3", 
"files/aud/BF9721AD910D20E777CD1D02280CEB99.mp3", 
"files/aud/C0F75F93B9167870E9A9E91F27D6D8A2.mp3", 
"files/aud/C2B01E11AF2143A1E7D6924E7798357D.mp3", 
"files/aud/C0919F3C7A7793289C84D4A7D025A65A.mp3", 
"files/aud/CE7E562CC8AE07796DF24DBEA80FFC8B.mp3", 
"files/aud/CFA3A3216F9E2814585A7D133F44F80C.mp3", 
"files/aud/D0B4E5FB6DBB45CEF4185F1928299F65.mp3", 
"files/aud/D66F22E8249C653DAB514FC1B99CB812.mp3", 
"files/aud/D00235E5178CF482DDC0EF2EF3F8DF5D.mp3", 
"files/aud/D730DC33143113BCDB943E23290D287F.mp3", 
"files/aud/D25018ABDAC29E99948B33EE90BD4A25.mp3", 
"files/aud/D31410554C0EA38E4BD658AEA406752E.mp3", 
"files/aud/DBA7B9853DCDCB3B78547B621A3BFC94.mp3", 
"files/aud/DC02F0B59DA4B9BBC6741B7C7BC5E0F9.mp3", 
"files/aud/DD7982EC064DFA0D0D56F777356563C8.mp3", 
"files/aud/DF4FB1E4144CF5BCE22D34B702C3A624.mp3", 
"files/aud/DF630276A33CB1FDE3E88099334444A6.mp3", 
"files/aud/E2EECFB5DC17ADA9ADFB58FD98008A15.mp3", 
"files/aud/E7B8C874C5A8ADC357A6CC35DD363F47.mp3", 
"files/aud/E8AAA8E839EAAB0C05B531F517521726.mp3", 
"files/aud/E873A48981FB615E15E13F05602CE3F4.mp3", 
"files/aud/E083277213AC239C15C30DC9EEAFA239.mp3", 
"files/aud/EE500C3F7134F2CD1E5B6CB00C964FAC.mp3", 
"files/aud/EEBD631AAAA8C8C9B3DD09DA1A4FD837.mp3", 
"files/aud/F7DCFAFC92AF08EBCC4BADA650126654.mp3", 
"files/aud/F51FF77FF3BBB4010BA767C5F55834DB.mp3", 
"files/aud/F68EF9FCC92808BC50D293B2642824E4.mp3", 
"files/aud/F5771CE81AA3E10A269575B79EF66944.mp3", 
"files/aud/F7548A5B5BABA9243DE25A998500951B.mp3", 
"files/aud/FB543724C87E3692B510C82A3385AC44.mp3", 
"files/aud/FB23415943B1729A5BC85D52F05E2DEE.mp3", 
"files/aud/FCCA915F20E7312DA37F901D3492E9B8.mp3", 
"files/aud/FCF058FAF0C222B57D8284AD3E4B29F5.mp3", 
"files/aud/FE739E5D62BBEE2652FA0B53231AA333.mp3", 
"files/aud/FF3292518DB2E5ADE279029997865575.mp3", 
"files/aud/FFC7E7F97F2936636B268947653D9068.mp3",
        ];

document.addEventListener('DOMContentLoaded', () => {
    // AUDIO PLAYER SETUP
    const audioPlayer = document.getElementById('audioPlayer');
    const enterButton = document.getElementById('enter-button');
    const splashScreen = document.getElementById('splash-screen');
    const container = document.getElementById('container');

    if (!audioPlayer || !enterButton || !splashScreen || !container) {
        console.error("Missing critical elements: Check audioPlayer, enterButton, splashScreen, and container IDs.");
        return;
    }

    audioPlayer.volume = 1.0;

    let audioContext;
    let visualizer;

    function playRandomTrack() {
        if (audioTracks.length === 0) {
    console.error("No audio tracks available.");
    return Promise.reject(new Error("No audio tracks available."));
        }

        const randomIndex = Math.floor(Math.random() * audioTracks.length);
        const randomTrack = audioTracks[randomIndex];
        audioPlayer.src = randomTrack;

        return audioPlayer.play().catch(error => {
    console.error("Playback failed for track:", randomTrack, error);
        });
    }

    function initVisualizer() {
        if (typeof butterchurn === 'undefined') {
    console.error("Butterchurn is not defined. Ensure the library is loaded correctly.");
    return;
        }

        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        visualizer = butterchurn.createVisualizer(audioContext, canvas, {
    width: canvas.width,
    height: canvas.height,
    pixelRatio: window.devicePixelRatio || 1,
    textureRatio: 1,
        });

        const presets = butterchurnPresets.getPresets();
        const presetKeys = Object.keys(presets);
        if (presetKeys.length > 0) {
    const randomPreset = presets[presetKeys[Math.floor(Math.random() * presetKeys.length)]];
    visualizer.loadPreset(randomPreset, 0);
        } else {
    console.error("No presets found to load.");
        }

        function startRenderer() {
    requestAnimationFrame(startRenderer);
    visualizer.render();
        }
        startRenderer();

        const mediaStream = audioPlayer.captureStream ? audioPlayer.captureStream() : audioPlayer.mozCaptureStream();
        const source = audioContext.createMediaStreamSource(mediaStream);
        visualizer.connectAudio(source);
    }

    function handleEnterClick() {
        // Hide splash screen and show main container
        splashScreen.style.display = 'none';
        container.style.visibility = 'visible';

        // Start audio playback and initialize visualizer
        playRandomTrack().then(() => {
    initVisualizer();
        }).catch(error => {
    console.error("Error during enter button action:", error);
        });
    }

    // Add event listener for the enter button
    enterButton.addEventListener('click', handleEnterClick);

    // Automatically play the next track when the current one ends
    audioPlayer.addEventListener('ended', playRandomTrack);

    // Draggable video functionality for the four videos
    const videos = document.querySelectorAll('.draggable-video');

    function makeDraggable(videoElement) {
        let isDragging = false;
        let offsetX, offsetY;

        videoElement.addEventListener('mousedown', (event) => {
    isDragging = true;
    offsetX = event.clientX - videoElement.getBoundingClientRect().left;
    offsetY = event.clientY - videoElement.getBoundingClientRect().top;
    videoElement.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (event) => {
    if (isDragging) {
        videoElement.style.left = `${event.clientX - offsetX}px`;
        videoElement.style.top = `${event.clientY - offsetY}px`;
    }
        });

        document.addEventListener('mouseup', () => {
    isDragging = false;
    videoElement.style.cursor = 'grab';
        });

        videoElement.style.cursor = 'grab';
    }

    videos.forEach(makeDraggable);
});

document.addEventListener('DOMContentLoaded', () => {
    const galleryOverlay = document.getElementById('artGalleryOverlay');
    const galleryContent = document.getElementById('artGalleryContent');
    const galleryClose = document.getElementById('artGalleryClose');
    const galleryLink = document.querySelector('.gallery-link');

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function populateGallery() {
        const images = Array.from(galleryContent.querySelectorAll('img'));
        const shuffledImages = shuffle(images);

        // Clear and re-add shuffled images
        galleryContent.innerHTML = '';
        shuffledImages.forEach((img) => galleryContent.appendChild(img));
    }

    function openGallery() {
        if (galleryOverlay) {
    populateGallery(); // Randomize image order
    galleryOverlay.style.display = 'block';
        }
    }

    function closeGallery() {
        if (galleryOverlay) {
    galleryOverlay.style.display = 'none';
        }
    }

    if (galleryClose) {
        galleryClose.addEventListener('click', closeGallery);
    }

    if (galleryLink) {
        galleryLink.addEventListener('click', (event) => {
    event.preventDefault();
    openGallery();
        });
    }

    // Add click event to all images to close the gallery
    galleryContent.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
    closeGallery();
        }
    });
});

function toggleAbout() {
    const aboutOverlay = document.getElementById('aboutOverlay');
    const galleryOverlay = document.getElementById('artGalleryOverlay');

    if (!aboutOverlay) {
        console.error("About overlay element not found.");
        return;
    }

    // Close gallery if open
    if (galleryOverlay && galleryOverlay.style.display === 'block') {
        galleryOverlay.style.display = 'none';
    }

    // Toggle About overlay
    if (aboutOverlay.style.display === 'none' || aboutOverlay.style.display === '') {
        aboutOverlay.style.display = 'block';
        console.log("About overlay opened.");
    } else {
        aboutOverlay.style.display = 'none';
        console.log("About overlay closed.");
    }
}

// Prevent gallery clicks from opening About
document.getElementById('artGalleryOverlay').addEventListener('click', (event) => {
    event.stopPropagation();
});

</script>
