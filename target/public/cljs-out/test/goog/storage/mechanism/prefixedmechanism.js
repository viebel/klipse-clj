/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.storage.mechanism.PrefixedMechanism");
goog.require("goog.iter");
goog.require("goog.iter.Iterator");
goog.require("goog.storage.mechanism.IterableMechanism");
goog.storage.mechanism.PrefixedMechanism = function(mechanism, prefix) {
  goog.storage.mechanism.PrefixedMechanism.base(this, "constructor");
  this.mechanism_ = mechanism;
  this.prefix_ = prefix + "::";
};
goog.inherits(goog.storage.mechanism.PrefixedMechanism, goog.storage.mechanism.IterableMechanism);
goog.storage.mechanism.PrefixedMechanism.prototype.set = function(key, value) {
  this.mechanism_.set(this.prefix_ + key, value);
};
goog.storage.mechanism.PrefixedMechanism.prototype.get = function(key) {
  return this.mechanism_.get(this.prefix_ + key);
};
goog.storage.mechanism.PrefixedMechanism.prototype.remove = function(key) {
  this.mechanism_.remove(this.prefix_ + key);
};
goog.storage.mechanism.PrefixedMechanism.prototype.__iterator__ = function(opt_keys) {
  const subIter = this.mechanism_[Symbol.iterator]();
  const selfObj = this;
  const newIter = new goog.iter.Iterator();
  newIter.next = function() {
    let key;
    let it = subIter.next();
    if (it.done) {
      return it;
    }
    key = it.value;
    while (key.slice(0, selfObj.prefix_.length) != selfObj.prefix_) {
      it = subIter.next();
      if (it.done) {
        return it;
      }
      key = it.value;
    }
    return goog.iter.createEs6IteratorYield(opt_keys ? key.slice(selfObj.prefix_.length) : selfObj.mechanism_.get(key));
  };
  return newIter;
};
