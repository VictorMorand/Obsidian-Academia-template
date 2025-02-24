---
zotero-key: IGHRPWNC
zt-attachments:
  - "538"
title: Attention is All you Need
alias:
  - Attention is All you Need
collections:
  - Recherche
citekey: vaswaniAttentionAllYou2017
year: 2017
authors: Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Ł ukasz Kaiser, Illia Polosukhin
keywords: ✅
status: ✅
---
# Attention is All you Need
```meta-bind-button
label: 🔃 Update Note
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: "Copy all highlights here, must be in **edit mode**"
id: "zotlit-update"
hidden: true
actions:
  - type: command
    command: zotlit:update-literature-note
```
```meta-bind-button
label: ➡️ Open in Zotero
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: "zotero-open"
hidden: true
actions:
  - type: open
    link: zotero://select/library/items/IGHRPWNC
    newTab: false
```
```meta-bind-button
label: 👀 View Highlights
icon: ""
style: default
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: zotlit-view-panel
hidden: true
actions:
  - type: command
    command: zotlit:zotero-annot-view
```
``BUTTON[zotero-open]`` ``BUTTON[zotlit-update]`` ``BUTTON[zotlit-view-panel]`` 

> [!abstract]- Abstract
>The dominant sequence transduction models are based on complex recurrent orconvolutional neural networks in an encoder and decoder configuration. The best performing such models also connect the encoder and decoder through an attentionm echanisms.  We propose a novel, simple network architecture based solely onan attention mechanism, dispensing with recurrence and convolutions entirely.Experiments on two machine translation tasks show these models to be superiorin quality while being more parallelizable and requiring significantly less timeto train. Our single model with 165 million parameters, achieves 27.5 BLEU onEnglish-to-German translation, improving over the existing best ensemble result by over 1 BLEU. On English-to-French translation, we outperform the previoussingle state-of-the-art with model by 0.7 BLEU, achieving a BLEU score of 41.1.
# Notes
- Introduces the [[transformer]] architecture !
# Reading Notes

### ⭐ Highlights, Key Ideas

> We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. [(Page 1)](zotero://open-pdf/library/items/H73JK4MH?page=1&annotation=ZYALSTMZ)
> ^ZYALSTMZaH73JK4MHp1
> ![[LiteratureNotes/assets/73T7CX3U.png]] [(Page 3)](zotero://open-pdf/library/items/H73JK4MH?page=3&annotation=73T7CX3U)
> ^73T7CX3UaH73JK4MHp3

### ⭐ Highlights, Key Ideas

> We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. [(Page 1)](zotero://open-pdf/library/items/H73JK4MH?page=1&annotation=ZYALSTMZ)
> ^ZYALSTMZaH73JK4MHp1

### ⚙️Operation, details

> Instead of performing a single attention function with dmodel-dimensional keys, values and queries, we found it beneficial to linearly project the queries, keys and values h times with different, learned linear projections to dk, dk and dv dimensions, respectively. [(Page 4)](zotero://open-pdf/library/items/H73JK4MH?page=4&annotation=5EU5U6CW)
> ^5EU5U6CWaH73JK4MHp4

> To this end, we add "positional encodings" to the input embeddings [(Page 5)](zotero://open-pdf/library/items/H73JK4MH?page=5&annotation=KCEW77H8)
> ^KCEW77H8aH73JK4MHp5
