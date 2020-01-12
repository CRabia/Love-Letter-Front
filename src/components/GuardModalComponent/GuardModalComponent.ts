import { Component, Vue } from "vue-property-decorator";
import Player from '@/models/Player';

@Component
export default class GuardModalComponent extends Vue {
    public selectedTargetId = "";
    public selectedCardValue = "";
    
    public get players() {
        const players = this.$store.state.players;
        return players.filter((p: Player) => p.id !== this.currentPlayer.id);
    }

    public sendCardPlayedEvent(){
        if(this.selectedTargetId !== "")
            this.$emit("send-card-played-guard", this.selectedTargetId, this.selectedCardValue);
    }

    get currentPlayer() {
        return this.$store.getters.GET_CONNECTED_PLAYER;
    }
}
