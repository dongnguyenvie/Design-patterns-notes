/**
 * USEAGE OF THE ADAPTER PATTERN
 *
 * In case of a legacy application
 * In case of converting an interface into another
 * In case of translating a client's requests for a webservice
 */

;(() => {
    interface BirdTarget {
        fly: () => void
        makeSound: () => void
    }
    class SparrowClient implements BirdTarget {
        public fly() {
            console.log('Flying')
        }
        public makeSound() {
            console.log('chíp chíp')
        }
    }

    // and we want to converting real bird into bird toys
    interface BirdToy {
        squeak: () => void
    }
    interface IBirdToyAdapter extends BirdToy {}
    class BirdAdapter implements IBirdToyAdapter {
        bird: BirdTarget
        constructor(bird: BirdTarget) {
            this.bird = bird
        }
        public squeak() {
            this.bird.makeSound()
        }
    }
    class PlasticToyDuck implements BirdToy {
        public squeak() {
            console.log('squeak')
        }
    }

    const clientCode = () => {
        const sparrow = new SparrowClient()
        const plasticToyDuck = new PlasticToyDuck()
        const sparrowAdapter = new BirdAdapter(sparrow)
        console.log('Sparrow...')
        sparrow.makeSound()
        console.log('PlasticToyDuck...')
        plasticToyDuck.squeak()
        console.log('BirdAdapter...')
        sparrowAdapter.squeak()
    }

    console.log('>>> ADAPTER PATTERN')
    clientCode()
    console.log('ADAPTER PATTERN <<<')
    console.log('\n')
})()
