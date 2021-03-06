package gwt.material.design.demo.client.application.badges;

import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.user.client.ui.SimplePanel;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewWithUiHandlers;

import javax.inject.Inject;

public class BadgesView extends ViewWithUiHandlers<BadgesUiHandlers> implements BadgesPresenter.MyView {

    interface Binder extends UiBinder<Widget, BadgesView> {
    }

    @Inject
    BadgesView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }
}
