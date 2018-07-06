describe('AppUtil.debounce', function() {

    it('AppUtil.debounce', function() {
        var x = 'Den';
        var test = function() {
            x = "Hi " + x;
        };

        jasmine.clock().install();

        var time = AppUtil.debounce(test, 500, function(value) {});

        setTimeout(function() {
            time()
        }, 300);

        jasmine.clock().tick(300);

        expect(x).toBe("Den");

        setTimeout(function() {
            time()
        }, 600);

        jasmine.clock().tick(600);

        expect(x).toBe("Hi Den");

        jasmine.clock().uninstall();
    });
// тут немного не понял
    it('AppUtil.throttle', function(done) {
        var x = 'Den';
        var test = function() {
            x = "Hi " + x;
        };

        setInterval(function(test) {
            expect(typeof test).toBe('function');

            done();
        }, 10, test);
    });
});