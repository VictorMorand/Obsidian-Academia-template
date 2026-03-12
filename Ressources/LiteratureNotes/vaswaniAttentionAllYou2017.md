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
url: https://arxiv.org/abs/1706.03762
---
# Attention is All you Need
```dataviewjs
const {Ressources} = await cJS()
Ressources.paperheader(dv);
```
> [!abstract]- Abstract
>The dominant sequence transduction models are based on complex recurrent orconvolutional neural networks in an encoder and decoder configuration. The best performing such models also connect the encoder and decoder through an attentionm echanisms.  We propose a novel, simple network architecture based solely onan attention mechanism, dispensing with recurrence and convolutions entirely.Experiments on two machine translation tasks show these models to be superiorin quality while being more parallelizable and requiring significantly less timeto train. Our single model with 165 million parameters, achieves 27.5 BLEU onEnglish-to-German translation, improving over the existing best ensemble result by over 1 BLEU. On English-to-French translation, we outperform the previoussingle state-of-the-art with model by 0.7 BLEU, achieving a BLEU score of 41.1.


# Notes
- Introduces the [[transformer]] architecture !
- Blah Blah Blah ... it is important to note what you think about papers you read !
# Reading Notes

> ![[Ressources/LiteratureNotes/assets/73T7CX3U.png|400]] [(Page 3)](zotero://open-pdf/library/items/H73JK4MH?page=3&annotation=73T7CX3U)
> ^73T7CX3UaH73JK4MHp3











>[!tip]-  Features
> This is an example Literature note, you can take notes about any Zotero item, 
> - Auto import all annotations ("🔄 Update note" button )
> - View Highlights / drag'n drop them in your note "👀 View Highlights" (may need to click 🔗 > "follow active literature note")

>[!faq] try to click on an Author


>[!info]  Links and buttons will not work here as long as the file was not created within your config, you can delete this file and import new literature notes from [[🎓 Research]].


### ⭐ Highlights, Key Ideas

> We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely. [(Page 1)](zotero://open-pdf/library/items/H73JK4MH?page=1&annotation=ZYALSTMZ)
> ^ZYALSTMZaH73JK4MHp1




### ⚙️Operation, details

> Instead of performing a single attention function with dmodel-dimensional keys, values and queries, we found it beneficial to linearly project the queries, keys and values h times with different, learned linear projections to dk, dk and dv dimensions, respectively. [(Page 4)](zotero://open-pdf/library/items/H73JK4MH?page=4&annotation=5EU5U6CW)
> ^5EU5U6CWaH73JK4MHp4

> To this end, we add "positional encodings" to the input embeddings [(Page 5)](zotero://open-pdf/library/items/H73JK4MH?page=5&annotation=KCEW77H8)
> ^KCEW77H8aH73JK4MHp5
