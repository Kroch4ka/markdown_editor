import utils from '../../utils.js'

const documentListNode = document.querySelector('.document_list');

const documentSaveView = {
  render: function(state) {
    documentListNode.innerHTML = '';
    state.documents.forEach(document => {
      documentListNode.appendChild(this.createDocumentItem(document.name));
    });
  },
  createDocumentItem: function(name) {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('document_item');
    const documentImg = document.createElement('img');
    documentImg.src = 'assets/icon-document.svg';
    const itemInfoWrapper = document.createElement('div');
    itemInfoWrapper.classList.add('document_item__info');
    const createDateNode = document.createElement('span');
    createDateNode.classList.add('document_item__create_date');
    const itemNameNode = document.createElement('span');
    itemNameNode.classList.add('document_item__title');
    itemNameNode.textContent = name;
    const [day, _, year] = new Date().toLocaleDateString().split('.');
    const formattedMonth = utils.getMonthNameBySerialNumber(new Date().getMonth());
    createDateNode.textContent = `${day} ${formattedMonth} ${year}`;
    itemInfoWrapper.append(createDateNode, itemNameNode);
    itemWrapper.append(documentImg, itemInfoWrapper);

    return itemWrapper;
  }
}

export default documentSaveView;