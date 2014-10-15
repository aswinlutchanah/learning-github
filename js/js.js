//Unload
if ($('form').length) {
    $('form').change(function(e) {
        window.onbeforeunload = confirmExit;
        $('form').on('submit', function(e) {
            window.onbeforeunload = '';
        });
        function confirmExit() {
            return 'Vérifiez que vous avez bien enregistré avant de quitter la page.';
        }
    });
}