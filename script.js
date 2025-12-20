        const pages = [
          'entry2_index.html',
          'entry3_index.html',
          'entry4_index.html'
        ];

        function goToRandomPage() {
            const randomIndex = Math.floor(Math.random() * pages.length);
            const randomPage = pages[randomIndex];
    window.location.href = randomPage;
}