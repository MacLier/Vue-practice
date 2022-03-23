function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: [],
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'monster';
            }

        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth < 0) {
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = 'player';
            }
        },

    },
    computed: {
        monsterBarStyles() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' }
        },
        playerBarStyles() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' }
        },
        logStyles() {

        },

        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const dmg = getRandomValue(7, 12);
            if (this.monsterHealth - dmg < 0) {
                this.monsterHealth = 0;
            }
            else {
                this.monsterHealth -= dmg;
            }
            this.addLogMessage('Player', 'Swing', dmg);
            this.attackPlayer();
        },
        attackPlayer() {
            const dmg = getRandomValue(8, 15);
            if (this.playerHealth - dmg < 0) {
                this.playerHealth = 0;
            } else {
                this.playerHealth -= dmg;
            }
            this.addLogMessage('Chtulu', 'Slap', dmg);
        },
        specialAttack() {
            this.currentRound++;
            const dmg = getRandomValue(10, 25);
            if (this.monsterHealth - dmg < 0) {
                this.monsterHealth = 0;
            } else {
                this.monsterHealth -= dmg;
            }
            this.addLogMessage('Player', 'Furry Punch', dmg);
            this.attackPlayer();
        },
        selfHeal() {
            const healValue = getRandomValue(9, 16);
            this.currentRound++;
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
            this.addLogMessage('Player', 'Heal', healValue);
        },
        startNewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = [];
        },
        surrender() {
            this.winner = 'monster';
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            })
        },
    },
});

app.mount('#game');