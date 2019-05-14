function SpeakersService ()
{
    const localStorageKey = 'speakers';
    const apiEndpoint = '//raw.githubusercontent.com/ncraftsconf/newcrafts19/master/datas/speakers.js';

    this.fetch = function()
    {
        return fetch(apiEndpoint)
            .then(response => response.json())
            .then(datas => {
                const speakers = datas.speakers;

                localStorage.setItem(localStorageKey, JSON.stringify(speakers));

                return speakers;
            })
    }

    this.get = function () {
        return JSON.parse(localStorage.getItem(localStorageKey)) || [];
    }
};

export default SpeakersService;