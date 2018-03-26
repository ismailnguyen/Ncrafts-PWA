function EventsService ()
{
    this.get = function()
    {
        return [
            {
                type: 'conf',
                hourRange: '9:15 - 10:05',
                title: 'Educational neurosciences, what can they teach us ?',
                speaker: 'MARINE CAMPEDEL',
                avatar: 'http://bordeaux.ncrafts.io/2017/assets/img/speakers/franziska.jpg',
                description: `Educational neurosciences question our beliefs, and make us wonder what do we know about apprenticeship patterns, with a little help from scientific results.
                They deliver 3 main messages : 
                
                equipped with biological plasticity, our brain can reconfigured itself during our whole life
                Knowledge about how our nervous system is actually working can enhance our personal and collective choices (for exemple, lifestyle, or our relation to all kind of screens)
                Let us all be co-researchers, so we can help all mankind
                This conference will explore all this 3 messages by studying common neuromyths.`,
                tags: 'education, science'
            },
            {
                type: 'conf',
                hourRange: '15:40 - 16:30',
                title: 'Refactoring mount doom, tackling legacy code',
                speaker: 'FRANZISKA SAUERWEIN',
                avatar: 'http://bordeaux.ncrafts.io/2017/assets/img/speakers/marine.jpg',
                description: `We’ve all had that nightmare where you are try to get to your destination, and keeping moving, trying different things, but for various reasons, you never arrive. Some refactorings are like that - you extract methods, name constants, increase readability… In short, you spend a lot of time cleaning up - but you never get to a good place with the code. In this talk, I will show you how to refactor for the right reasons and the right methods to use your time efficiently. Let’s make working with that code easier in the future.`,
                tags: 'legacy, refactoring'
            },
            {
                type: 'presentation',
                hourRange: '19:00 - 23:00',
                title: 'Closing words',
                speaker: 'NewCraft team & minions',
                avatar: 'https://images-na.ssl-images-amazon.com/images/I/81J9G1LC%2BQL._SL1500_.jpg',
                description: 'Bye bye',
                tags: 'beer and cheese'
            },
        ];
    }
};

export default EventsService;