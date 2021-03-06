/**
 *  female_sage.js
 *  -----
 *  Friendly assisting units.
 */

ig.module(
    'game.entities.players.female_sage'
)
.requires(
    'game.entities.abstractities.base_player'
)
.defines(function() {
    "use strict";

    ig.global.EntityFemale_sage = ig.global.EntityBase_player.extend({
        entityClassName: ['EntityFemale_sage'],

        name: 'Limstella',

        animSheet: new ig.AnimationSheet('media/units/players/newFemaleSage.png', 32, 32),
        statMugshot: new ig.Image('media/mugshots/players/limstella.png'),
        modal: new ig.Image('media/modal/limstella_modal.png'),
        battleAnim: 'EntitySage_battleanim',

        init: function(x, y, settings) {
            // Stats

            // Items
            this.item[0] = ig.game.itemCatalog.tome1;  this.item_uses[0] = this.item[0].uses;
            //this.item[0] = null;  this.item_uses[0] = this.item[0].uses;
            //this.item[1] = null;  this.item_uses[1] = this.item[1].uses;
            //this.item[2] = null;  this.item_uses[2] = this.item[2].uses;
            //this.item[3] = null;  this.item_uses[3] = this.item[3].uses;
            //this.item[4] = null;  this.item_uses[4] = this.item[4].uses;

            // IMPORTANT!! Keep these last in the unit's init() method. No exceptions!
            ig.game.recomputeStats(this);
            this.parent(x, y, settings);
        }
    });
});
