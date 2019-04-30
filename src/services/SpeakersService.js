function SpeakersService ()
{
    this.get = function()
    {
        return fetch('/datas/speakers.js')
                .then(response => response.json())
                .then(response => response.speakers)
    }
};

export default SpeakersService;